import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Qualities from "../../ui/qualities"
import API from "../../../api"
import { useHistory } from "react-router-dom"

const UserPage = ({ usersID }) => {
    const history = useHistory()
    const handleEditUser = () => {
        history.replace(`/users/${usersID}/edit`)
    }
    const [userObject, setUserObject] = useState()

    useEffect(() => {
        API.users.getById(usersID).then((data) => setUserObject(data))
    }, [userObject])

    return userObject ? (
        <>
            <ul className="list-group">
                <li className="list-group-item">{userObject.name}</li>
                <li className="list-group-item">{`Профессия: ${userObject.profession.name}`}</li>
                <li className="list-group-item">
                    <Qualities qualities={userObject.qualities} />
                </li>
                <li className="list-group-item">{`Встретился, раз: ${userObject.completedMeetings}`}</li>
                <li className="list-group-item">{`Rate: ${userObject.rate}`}</li>
                <li className="list-group-item">
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={handleEditUser}
                    >
                        Edit
                    </button>
                </li>
            </ul>
        </>
    ) : (
        <h1>Loading...</h1>
    )
}
UserPage.propTypes = { usersID: PropTypes.string }

export default UserPage
