import PropTypes from 'prop-types';
import React from 'react';
import SubtopicHeader from './subtopicHeader';
import OpportunityButton from './opportunityButton';
import opportunties from '../content/opportunities.json';
import history from '../content/history.json';

const History = ({ typology }) => {
  const historyParagraphs = history[typology].map((paragraph) => <p className="history__paragraph">{paragraph}</p>);
  return (
    <article className="article">
      <SubtopicHeader title="History" highlightWidth={85} />
      {historyParagraphs}
      <div className="opportunity__wrapper">
        <OpportunityButton
          title={opportunties[typology].history.titleOne}
          description={opportunties[typology].history.textOne}
        />
        <OpportunityButton
          title={opportunties[typology].history.titleTwo}
          description={opportunties[typology].history.textTwo}
        />
      </div>
    </article>
  );
};

History.propTypes = {
  typology: PropTypes.string.isRequired,
};

export default History;
