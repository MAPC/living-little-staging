import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SubtopicHeader from './subtopicHeader';
import vid from "../images/vid-placeholder.png";

const ContextVideos = () => {

  return (
    <section className="section">
      <div className="main-column context-videos">
        <SubtopicHeader title="Regional Housing Needs" highlightWidth={261} />
        <p>Cottage housing is typically 900-1,500 square feet and one- or two-stories tall. Cottages often have a porch or other community-oriented feature, and the overall site design—including pathways and common open space—is an important part of a cottage development.</p>
        <img src={vid} />
        <SubtopicHeader title="Impacts of Construction Costs" highlightWidth={232} />
        <p>Cottage housing is typically 900-1,500 square feet and one- or two-stories tall. Cottages often have a porch or other community-oriented feature, and the overall site design—including pathways and common open space—is an important part of a cottage development. </p>
        <img src={vid} />
        <SubtopicHeader title="What is the Missing Middle?" highlightWidth={305} />
        <p>Cottage housing is typically 900-1,500 square feet and one- or two-stories tall. Cottages often have a porch or other community-oriented feature, and the overall site design—including pathways and common open space—is an important part of a cottage development. </p> 
        <img src={vid} />
      </div>
    </section>
  )
};

export default ContextVideos;
