import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import TypologySelector from './typologySelector';
import SocialSharing from './socialSharing';
import Overview from './overview';
import History from './history';
import PotentialLayouts from './potentialLayouts';


const TypologyDeepDive = () => {
  const [typology, setTypology] = useState('adu');

  return (
    <section className="section main-column">
      <TypologySelector updateTypology={setTypology} currentTypology={typology} />
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

export default TypologyDeepDive;
