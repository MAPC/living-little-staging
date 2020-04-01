import React, { useState } from 'react';
import definitions from '../content/definitions.json';

const TypologySelect = () => {
  const [typology, setTypology] = useState('adu');
  const selectWidth = {
    adu: 225,
    'tiny house': 100,
    'row house': 100,
    'mixed-use': 340,
    cottage: 210,
    cohousing: 180,
  };

  return (
    <section>
      <h2 className="typology-select__header">
        Explore
        {' '}
        {typology === 'adu' ? 'an ' : 'a '}
      </h2>
      <div className="typology-select__wrapper">
        <select
          className="typology-select__selector"
          onChange={(event) => setTypology(event.target.value)}
          style={{
            width: `${selectWidth[typology] + 30}px`,
          }}
        >
          <option value="adu" className="typology-select__option" defaultValue>accessory dwelling unit</option>
          <option value="tiny house">tiny house</option>
          <option value="row house">row house</option>
          <option value="mixed-use">small scale mixed-use development</option>
          <option value="cottage">cottage development</option>
          <option value="cohousing">cohousing building</option>
        </select>
      </div>
      <div
        className="typology-select__shadow"
        style={{
          left: typology === 'adu' ? '108px' : '98px',
          width: `${selectWidth[typology]}px`,
        }}
      />
      <p>{definitions[typology]}</p>
    </section>
  );
};

export default TypologySelect;
