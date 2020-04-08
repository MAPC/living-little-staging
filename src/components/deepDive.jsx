import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import TypologySelector from './typologySelector';
import Overview from './overview';
import History from './history';
import PotentialLayouts from './potentialLayouts';


const TypologyDeepDive = () => {
  let initialTypology = 'adu';
  if (typeof window !== "undefined") {
    initialTypology = window.location.hash.slice(10) ? window.location.hash.slice(10) : 'adu';
  }
  const [typology, setTypology] = useState(initialTypology);
  return (
    <section className="section main-column">
      <TypologySelector updateTypology={setTypology} currentTypology={typology} />
      <Overview typology={typology} />
      <History typology={typology} />
      <PotentialLayouts typology={typology} />
      <AnchorLink to="/#typology" className="anchor__wrapper">
        <FontAwesomeIcon icon={faArrowAltCircleUp} className="anchor__icon" />
        <span className="anchor__helper-text">Select another typology</span>
      </AnchorLink>
    </section>
  );
};

export default TypologyDeepDive;