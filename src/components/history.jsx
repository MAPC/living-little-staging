import PropTypes from 'prop-types';
import React from 'react';
import SubtopicHeader from './subtopicHeader';
import OpportunityButton from './opportunityButton';
import opportunties from '../content/opportunities.json';
import history from '../content/history.json';
import advantages from '../content/advantages.json';

const History = ({ typology }) => {
  const historyParagraphs = history[typology].map((paragraph) => <p className="history__paragraph">{paragraph}</p>);
  const advantagesButtons = advantages[typology].advantages.map((advantage) => <OpportunityButton description={advantage} /> )
  return (
    <article className="article">
      <SubtopicHeader title="History" highlightWidth={85} />
      {historyParagraphs}
      <div className="opportunity__wrapper">
        {advantagesButtons}
      </div>
    </article>
  );
};

History.propTypes = {
  typology: PropTypes.string.isRequired,
};

export default History;
