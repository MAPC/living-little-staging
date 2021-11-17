import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SubtopicHeader from './subtopicHeader';
import questions from '../content/questions.json';
import icon from "../images/question-icon.png";

const Questions = ({ typology }) => {
  return (
    <article className="article questions">
      <SubtopicHeader title="A Few Small Questions" highlightWidth={246} />
      <div className="questions__content">
        <div className="questions__icon">
          <img src={icon}/>
        </div>
        <div className="questions__copy">
          <p className="questions__copy-question">{questions[typology].questions.questionOne}</p>
          <p>{questions[typology].questions.answerOne}</p>
        </div>
      </div>
      <div className="questions__content">
        <div className="questions__icon">
          <img src={icon}/>
        </div>
        <div className="questions__copy">
          <p className="questions__copy-question">{questions[typology].questions.questionTwo}</p>
          <p>{questions[typology].questions.answerTwo}</p>
        </div>
      </div>
      <div className="questions__content">
        <div className="questions__icon">
          <img src={icon}/>
        </div>
        <div className="questions__copy">
          <p className="questions__copy-question">{questions[typology].questions.questionThree}</p>
          <p>{questions[typology].questions.answerThree}</p>
        </div>
      </div>
    </article>
  );
};

Questions.propTypes = {
  typology: PropTypes.string.isRequired
};

export default Questions;