import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

const TypologyDropdown = ({ typology }) => {
  const exploreText = {
    adu: 'Explore an',
    tinyhouse: 'Explore a',
    rowhouse: 'Explore a',
    mixeduse: 'Explore a',
    cottage: 'Explore a',
    cohousing: 'Explore',
  };


  return (
    <div className="typology-selector__wrapper">
      <h2 className="h2 typology-selector__header" id="select">
        {exploreText[typology]}
      </h2>
      <div className="dropdown__outer-wrapper">
        <div className="dropdown__inner-wrapper">
          <select
            className={`dropdown__select dropdown__select--${typology}`}
            onChange={(event) => {
              navigate(`/${event.target.value}`);
            }}
            defaultValue={typology}
          >
            <option value="adu" className="dropdown__option">accessory dwelling unit</option>
            <option value="tinyhouse" className="dropdown__option">tiny house</option>
            <option value="rowhouse" className="dropdown__option">row house</option>
            <option value="mixeduse" className="dropdown__option">small scale mixed-use development</option>
            <option value="cottage" className="dropdown__option">cottage development</option>
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
