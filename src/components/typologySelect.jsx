import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Overview from './typologySelect/overview';
import History from './typologySelect/history';
import PotentialLayouts from './typologySelect/potentialLayouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const TypologySelect = () => {
  const [typology, setTypology] = useState('adu');
  const selectWidth = {
    adu: 335,
    'tiny house': 155,
    'row house': 153,
    'mixed-use': 501,
    cottage: 303,
    cohousing: 270,
  };

  return (
    <section className="section">
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
          left: typology === 'adu' ? '152px' : '135px',
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
