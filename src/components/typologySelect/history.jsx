import PropTypes from 'prop-types';
import React from 'react';
import SubtopicHeader from './subtopicHeader';
import OpportunityButton from './opportunityButton';
import opportunties from '../../content/opportunities.json';

const History = ({ typology }) => (
  <article className="article">
    <SubtopicHeader title="History" highlightWidth={85} />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div className="opportunity__wrapper">
      <OpportunityButton description={opportunties[typology].history.one} />
      <OpportunityButton description={opportunties[typology].history.two} />
    </div>
  </article>
);

History.propTypes = {
  typology: PropTypes.string.isRequired,
};

export default History;
