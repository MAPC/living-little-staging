import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SubtopicHeader from './subtopicHeader';
import questions from '../content/questions.json';

const Questions = ({ typology }) => {
  return (
    <article className="article questions">
      <SubtopicHeader title="A Few Small Questions" highlightWidth={246} />
      <div className="questions__copy">
        <p className="questions__copy-question">{questions[typology].questions.questionOne}</p>
        <p>{questions[typology].questions.answerOne}</p>
      </div>
      <div className="questions__copy">
        <p className="questions__copy-question">{questions[typology].questions.questionTwo}</p>
        <p>{questions[typology].questions.answerTwo}</p>
      </div>
      <div className="questions__copy">
        <p className="questions__copy-question">{questions[typology].questions.questionThree}</p>
        <p>{questions[typology].questions.answerThree}</p>
      </div>
    </article>
  );
};

Questions.propTypes = {
  typology: PropTypes.string.isRequired
};

export default Questions;