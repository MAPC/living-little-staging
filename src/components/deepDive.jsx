import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import SocialSharing from './socialSharing';
import TypologyDropdown from './typologyDropdown';
import Overview from './overview';
import History from './history';
import PotentialLayouts from './potentialLayouts';
import Advantages from './advantages';
import Questions from './questions';
import CaseStudies from './caseStudies';


const TypologyDeepDive = ({ typology }) => {
  let baseUrl = '/';
  if (typeof window !== "undefined") {
    baseUrl = window.location.pathname;
  }
  return (
    <section className="section deep-dive-container" id="select">
      <div className="main-column">
        <TypologyDropdown typology={typology} />
        <SocialSharing />
        <Overview typology={typology} />
        <History typology={typology} />
        <PotentialLayouts typology={typology} />
        <Advantages typology={typology} />
        <Questions typology={typology} />
        <CaseStudies typology={typology} />
        <AnchorLink to={`${baseUrl}#select`} className="anchor__wrapper">
          <FontAwesomeIcon icon={faArrowAltCircleUp} className="anchor__icon" />
          <span className="anchor__helper-text">Select another typology</span>
        </AnchorLink>
      </div>
    </section>
  );
};

export default TypologyDeepDive;
