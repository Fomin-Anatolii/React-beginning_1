import React from "react"
import PropTypes from "prop-types"
import Select from "react-select"

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  label: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options

    const handleChange = (value) => {
        onChange({ name: name, value })
    }
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <Select
                isMulti
                defaultValue={defaultValue}
                options={optionsArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                name={name}
                closeMenuOnSelect={false}
            />
        </div>
    )
}

MultiSelectField.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.array
}
export default MultiSelectField
