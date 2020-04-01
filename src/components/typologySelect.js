import React from "react"

const TypologySelect = () => (
  <section>
    <h2 className="typology-select__header">Explore a {' '}</h2>
    <div className="typology-select__wrapper">
      <select className="typology-select__selector">
        <option value="0" className="typology-select__option">accessory dwelling unit</option>
        <option value="1">tiny house</option>
        <option value="2">row house</option>
        <option value="3">small scale mixed-use development</option>
        <option value="4">cottage development</option>
        <option value="5">cohousing building</option>
      </select>
    </div>
    <div className="typology-select__shadow"/>
  </section>
)

export default TypologySelect
