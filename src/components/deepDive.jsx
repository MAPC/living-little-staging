import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import SocialSharing from './socialSharing';
import TypologyDropdown from './typologyDropdown';
import Overview from './overview';
import History from './history';
import PotentialLayouts from './potentialLayouts';


const TypologyDeepDive = ({ typology }) => {
  let baseUrl = '/';
  if (typeof window !== "undefined") {
    baseUrl = window.location.pathname;
  }
  return (
    <section className="section main-column">
      <TypologyDropdown typology={typology} />
      <SocialSharing />
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
