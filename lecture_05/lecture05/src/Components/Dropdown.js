import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({ elements, onChange, selectedValue }) => {
  return (
    <div>
      <label>Select Login method</label>
      <select value={selectedValue} onChange={onChange}>
        {elements.map((element) => (
          <option key={element.value}>{element.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
Dropdown.propType = {
  elements: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.object,
}
