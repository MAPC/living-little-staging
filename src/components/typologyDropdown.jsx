import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

const TypologyDropdown = ({ typology }) => {
  const exploreText = {
    adu: 'Explore an',
    cottage: 'Explore a',
    tinyhouse: 'Explore a',
    townhouse: 'Explore a',
    sfc: 'Explore a',
    mixeduse: 'Explore a',
    cohousing: 'Explore',
  };


  return (
    <div className="typology-selector__wrapper">
      <h2 className="h2 typology-selector__header">
        {exploreText[typology]}
      </h2>
      <div className="dropdown__outer-wrapper">
        <div className="dropdown__inner-wrapper">
          <select
            className={`dropdown__select dropdown__select--${typology}`}
            onChange={(event) => {
              navigate(`/${event.target.value}#select`);
            }}
            defaultValue={typology}
          >
            <option value="adu" className="dropdown__option">accessory dwelling unit</option>
            <option value="cottage" className="dropdown__option">cottage development</option>
            <option value="tinyhouse" className="dropdown__option">tiny house</option>
            <option value="townhouse" className="dropdown__option">townhouse</option>
            <option value="sfc" className="dropdown__option">single-family conversion</option>
            <option value="mixeduse" className="dropdown__option">small scale mixed-use development</option>
            <option value="cohousing" className="dropdown__option">cohousing</option>
          </select>
        </div>
        <div className={`dropdown__shadow dropdown__shadow--${typology}`} />
      </div>
    </div>
  );
};

TypologyDropdown.propTypes = {
  typology: PropTypes.string.isRequired,
};

export default TypologyDropdown;
