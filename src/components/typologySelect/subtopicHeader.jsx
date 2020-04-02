import PropTypes from 'prop-types';
import React from 'react';

const SubtopicHeader = ({ title }) => {
  const highlightWidth = {
    History: 60,
    'Potential Layouts': 132,
  };

  return (
    <div className="subtopic__wrapper">
      <h3 className="subtopic__title">{title}</h3>
      <div className="subtopic__highlight" style={{ width: `${highlightWidth[title]}px` }} />
    </div>
  );
};

SubtopicHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubtopicHeader;
