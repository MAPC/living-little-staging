import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SubtopicHeader from './subtopicHeader';
import questions from '../content/questions.json';
import icon from "../images/question-icon.png";

const Questions = ({ typology }) => {

  const questionDivs = questions[typology].questions.map((elem) => 
  // console.log("elem", elem["q"])
  <div className="questions__content">
    <div className="questions__icon">
      <img src={icon}/>
    </div>
    <div className="questions__copy">
      <p className="questions__copy-question">{elem["q"]}</p>
      <p>{elem["a"]}</p>
    </div>
  </div>
  );

  return (
    <article className="article questions">
      <SubtopicHeader title="A Few Small Questions" highlightWidth={246} />
      {questionDivs}
    </article>
  );
};

Questions.propTypes = {
  typology: PropTypes.string.isRequired
};

export default Questions;