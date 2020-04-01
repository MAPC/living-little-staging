import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

const OpportunityButton = ({ description }) => (
  <aside className="opportunity">
    <FontAwesomeIcon icon={faLightbulb} className="opportunity__icon" />
    <div>
      <h4 className="opportunity__title">Opportunity</h4>
      {description}
    </div>
  </aside>
);

OpportunityButton.propTypes = {
  description: PropTypes.string.isRequired,
};

export default OpportunityButton;
