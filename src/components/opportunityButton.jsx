import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

const OpportunityButton = ({ title, description }) => (
  <aside className="opportunity">
    <FontAwesomeIcon icon={faLightbulb} className="opportunity__icon" />
    <div>
      {/* <h4 className="h4 opportunity__title">{title}</h4> */}
      {description}
    </div>
  </aside>
);

OpportunityButton.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default OpportunityButton;
