import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SubtopicHeader from './subtopicHeader';

const CaseStudies = ({ typology }) => {

  return (
    <section className="section case-studies">
      <div className="case-studies__wrapper">
        <SubtopicHeader title="Case Studies" highlightWidth={142} />
        <div className="slides__wrapper">
          <iframe
            className="slides__embed"
            src="//slides.com/mapc/deck/embed?style=light"
            scrolling="no"
            frameBorder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        </div>
      </div>
    </section>
  )
};

CaseStudies.propTypes = {
  typology: PropTypes.string.isRequired,
};

export default CaseStudies;
