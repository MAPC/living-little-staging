import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import definitions from '../content/definitions.json';
import fullNames from '../content/full-names.json';

const toggleClasses = () => {
  document.querySelector('.cell__overlay').classList.toggle('cell__overlay--hover');
  document.querySelector('.overlay__description').classList.toggle('overlay__description--hover');
};

const GridItem = ({ typology }) => {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "grid/adu.jpg"}) {
      childImageSharp {
        fixed(width: 600, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);
  return (
    <div className="cell__wrapper">
      <h3 className="h3 cell__title">{fullNames[typology]}</h3>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt={typology}
        className="cell__image"
        style={{ display: 'block' }}
      />
      <div
        className="cell__overlay"
        onMouseEnter={() => toggleClasses()}
        onMouseLeave={() => toggleClasses()}
      >
        <h3 className="h3 overlay__title">{fullNames[typology]}</h3>
        <p className="overlay__description">{definitions[typology]}</p>
      </div>
    </div>
  );
};

GridItem.propTypes = {
  typology: PropTypes.node.isRequired,
};
export default GridItem;
