import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import TypologyDropdown from './typologyDropdown';
import Overview from './overview';
import History from './history';
import PotentialLayouts from './potentialLayouts';


const TypologyDeepDive = () => {
  let initialTypology = 'adu';
  let baseUrl = '/';
  if (typeof window !== "undefined") {
    initialTypology = window.location.search.slice(10, -1) ? window.location.search.slice(10, -1) : 'adu';
    baseUrl = window.location.pathname;
  }
  const [typology, setTypology] = useState(initialTypology);
  return (
    <section className="section main-column">
      <TypologyDropdown updateTypology={setTypology} currentTypology={typology} />
      <Overview typology={typology} />
      <History typology={typology} />
      <PotentialLayouts typology={typology} />
      <AnchorLink to={`${baseUrl}#select`} className="anchor__wrapper">
        <FontAwesomeIcon icon={faArrowAltCircleUp} className="anchor__icon" />
        <span className="anchor__helper-text">Select another typology</span>
      </AnchorLink>
    </section>
  );
};

export default TypologyDeepDive;
