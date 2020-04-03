import React from 'react';
import PropTypes from 'prop-types';

const CallToAction = ({ title, description, resource }) => (
  <aside className="cta__wrapper">
    <a href={resource} className="cta__info">
      <h3 className="h3 cta__title">{title}</h3>
      <span className="cta__description">{description}</span>
    </a>
  </aside>
);

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
};

export default CallToAction;
