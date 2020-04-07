import React from 'react';
import PropTypes from 'prop-types';

const TypologySelector = ({ updateTypology, currentTypology }) => {
  const selectWidth = {
    adu: 339,
    tinyhouse: 159,
    rowhouse: 157,
    'mixed-use': 505,
    cottage: 307,
    cohousing: 274,
  };

  return (
    <div className="typology-selector">
      <h2 className="h2 typology-selector__header" id="typology">
        Explore
        {' '}
        {currentTypology === 'adu' ? 'an ' : 'a '}
      </h2>
      <div className="dropdown__wrapper">
        <select
          className="dropdown__select"
          onChange={(event) => {
            updateTypology(event.target.value);
            history.pushState(null, '', `/#typology/${event.target.value}`);
          }}
          style={{
            width: `${selectWidth[currentTypology] + 30}px`,
          }}
          defaultValue={currentTypology}
        >
          <option value="adu">accessory dwelling unit</option>
          <option value="tinyhouse">tiny house</option>
          <option value="rowhouse">row house</option>
          <option value="mixed-use">small scale mixed-use development</option>
          <option value="cottage">cottage development</option>
          <option value="cohousing">cohousing building</option>
        </select>
      </div>
      <div
        className="dropdown__shadow"
        style={{
          left: currentTypology === 'adu' ? '156px' : '139px',
          width: `${selectWidth[currentTypology]}px`,
        }}
      />
    </div>
  );
};

TypologySelector.propTypes = {
  updateTypology: PropTypes.func.isRequired,
  currentTypology: PropTypes.string.isRequired,
};

export default TypologySelector;
