import React from 'react';
import PropTypes from 'prop-types';

const TypologySelector = ({ updateTypology, currentTypology }) => {
  const selectWidth = {
    adu: 339,
    'tiny house': 159,
    'row house': 157,
    'mixed-use': 505,
    cottage: 307,
    cohousing: 274,
  };

  return (
    <div className="typology-select__top">
      <div>
        <h2 className="h2 typology-select__header" id="select">
          Explore
          {' '}
          {currentTypology === 'adu' ? 'an ' : 'a '}
        </h2>
        <div className="typology-select__wrapper">
          <select
            className="typology-select__selector"
            onChange={(event) => updateTypology(event.target.value)}
            style={{
              width: `${selectWidth[currentTypology] + 30}px`,
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
            left: currentTypology === 'adu' ? '156px' : '139px',
            width: `${selectWidth[currentTypology]}px`,
          }}
        />
      </div>
    </div>
    // {/*   <div className="typology-select__social-wrapper">
    //     <FontAwesomeIcon icon={faTwitter} className="typology-select__social-icon" />
    //     <FontAwesomeIcon icon={faFacebook} className="typology-select__social-icon" />
    //     <FontAwesomeIcon icon={faLinkedin} className="typology-select__social-icon" />
    //     <FontAwesomeIcon icon={faEnvelope} className="typology-select__social-icon" />
    //     <FontAwesomeIcon icon={faPrint} className="typology-select__social-icon" />
    //   </div> */}
  );
};

TypologySelector.propTypes = {
  updateTypology: PropTypes.func.isRequired,
  currentTypology: PropTypes.string.isRequired,
};

export default TypologySelector;
