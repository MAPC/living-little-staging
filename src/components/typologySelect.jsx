import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import Overview from './typologySelect/overview';
import History from './typologySelect/history';
import PotentialLayouts from './typologySelect/potentialLayouts';

const TypologySelect = () => {
  const [typology, setTypology] = useState('adu');
  const selectWidth = {
    adu: 339,
    'tiny house': 159,
    'row house': 157,
    'mixed-use': 505,
    cottage: 307,
    cohousing: 274,
  };

  return (
    <section className="section main-column">
      <h2 className="h2 typology-select__header" id="select">
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
          left: typology === 'adu' ? '156px' : '139px',
          width: `${selectWidth[typology]}px`,
        }}
      />
      <Overview typology={typology} />
      <History typology={typology} />
      <PotentialLayouts typology={typology} />
      <AnchorLink to="/#select" className="anchor__wrapper">
        <FontAwesomeIcon icon={faArrowAltCircleUp} className="anchor__icon" />
        <span className="anchor__helper-text">Select another typology</span>
      </AnchorLink>
    </section>
  );
};

export default TypologySelect;
