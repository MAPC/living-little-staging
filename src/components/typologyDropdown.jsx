import React from 'react';
import PropTypes from 'prop-types';

const TypologyDropdown = ({ updateTypology, currentTypology }) => {
  const selectWidth = {
    adu: 339,
    tinyhouse: 159,
    rowhouse: 157,
    mixeduse: 505,
    cottage: 307,
    cohousing: 274,
  };
  const updateSelectClassnames = (newTypology) => {
    document.querySelector('.dropdown__select').classList = [`dropdown__select dropdown__select--${newTypology}`];
    document.querySelector('.dropdown__shadow').classList = [`dropdown__shadow dropdown__shadow--${newTypology}`];
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
            updateSelectClassnames(event.target.value);
            history.pushState(null, '', `/#typology/${event.target.value}`);
          }}
          defaultValue={currentTypology}
        >
          <option value="adu">accessory dwelling unit</option>
          <option value="tinyhouse">tiny house</option>
          <option value="rowhouse">row house</option>
          <option value="mixeduse">small scale mixed-use development</option>
          <option value="cottage">cottage development</option>
          <option value="cohousing">cohousing building</option>
        </select>
      </div>
      <div className="dropdown__shadow" />
    </div>
  );
};

TypologyDropdown.propTypes = {
  updateTypology: PropTypes.func.isRequired,
  currentTypology: PropTypes.string.isRequired,
};

export default TypologyDropdown;
