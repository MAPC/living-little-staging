import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import definitions from '../content/definitions.json';
import fullNames from '../content/full-names.json';

const GridItem = ({ typology, image }) => {
  const toggleClasses = () => {
    const parentNode = document.querySelector(`.cell__wrapper--${typology}`);
    parentNode.querySelector('.cell__overlay').classList.toggle('cell__overlay--hover');
    parentNode.querySelector('.overlay__description').classList.toggle('overlay__description--hover');
  };
  return (
    <div className={`cell__wrapper cell__wrapper--${typology}`}>
      <h3 className="h3 cell__title">{fullNames[typology]}</h3>
      <Img
        fixed={image}
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
  image: PropTypes.string.isRequired,
};
export default GridItem;
