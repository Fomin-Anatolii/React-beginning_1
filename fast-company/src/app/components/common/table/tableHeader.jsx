import React from "react"
import PropTypes from "prop-types"

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort(() => ({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc"
      }))
    } else {
      onSort({
        path: item,
        order: "asc"
      })
    }
  }
  let arrow = ""

  if (selectedSort.order === "asc") {
    arrow = <i className="bi bi-caret-up-fill"></i>
  } else {
    arrow = <i className="bi bi-caret-down-fill"></i>
  }

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && "button" }}
            scope="col"
          >
            {columns[column].name}
            {columns[column].path === selectedSort.path
              ? selectedSort.path && arrow
              : null}
          </th>
        ))}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  onSort: PropTypes.func,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
}

export default TableHeader
