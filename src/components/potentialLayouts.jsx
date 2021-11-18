import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SubtopicHeader from './subtopicHeader';
import OpportunityButton from './opportunityButton';
import opportunties from '../content/opportunities.json';
import potentialLayouts from '../content/potential-layouts.json';
import layoutAdu0 from "../images/layout-adu.png";
import layoutAdu1 from "../images/layout-adu1.jpg";
import layoutAdu2 from "../images/layout-adu2.jpg";
import layoutAdu3 from "../images/layout-adu3.png";
import layoutAdu4 from "../images/layout-adu4.png";
import layoutCottage1 from "../images/layout-cottage1.png";
import layoutCottage2 from "../images/layout-cottage2.jpg";
import layoutTownhouse1 from "../images/layout-townhouse1.jpg";
import layoutTownhouse2 from "../images/layout-townhouse2.jpg";
import layoutTownhouse3 from "../images/layout-townhouse3.png";
import layoutTownhouse4 from "../images/layout-townhouse4.png";
import layoutSfc1 from "../images/layout-sfc1.png";
import layoutSfc2 from "../images/layout-sfc2.png";
import layoutSfc3 from "../images/layout-sfc3.png";
import layoutSfc4 from "../images/layout-sfc4.png";


const PotentialLayouts = ({ typology }) => {
  const data = useStaticQuery(graphql`
    {
      aduOneFloor: file(relativePath: {eq: "potential-layouts/adu_onefloor.png"}) {
        childImageSharp {
          fixed(width: 500, height: 394) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      aduTwoFloors: file(relativePath: {eq: "potential-layouts/adu_twofloors.png"}) {
        childImageSharp {
          fixed(width: 440, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
}
  `);

  const potentialLayoutParagraphs = potentialLayouts[typology].map((paragraph) => <p className="potential-layouts__paragraph">{paragraph}</p>);

  const potentialLayoutImageSrc = {
    adu: [layoutAdu0],
    cottage: [layoutCottage1, layoutCottage2],
    tinyhouse: [],
    townhouse: [layoutTownhouse1, layoutTownhouse2, layoutTownhouse3, layoutTownhouse4],
    sfc: [layoutSfc1, layoutSfc2, layoutSfc3, layoutSfc4],
    mixeduse: [],
    cohousing: []
  };

  const potentialLayoutImages = potentialLayoutImageSrc[typology].map((image) => <img src={image}  className="potential-layouts__img" />)

  return (
    <article className="article">
      <SubtopicHeader title="Potential Layouts" highlightWidth={193} />
      {potentialLayoutParagraphs}
      {/* <Img fixed={data.aduOneFloor.childImageSharp.fixed} className="potential-layouts__img" />
      <Img fixed={data.aduTwoFloors.childImageSharp.fixed} className="potential-layouts__img" /> */}
      {potentialLayoutImages}
      <div className="opportunity__wrapper">
        <OpportunityButton
          title={opportunties[typology]['potential layouts'].titleOne}
          description={opportunties[typology]['potential layouts'].textOne}
        />
        <OpportunityButton
          title={opportunties[typology]['potential layouts'].titleTwo}
          description={opportunties[typology]['potential layouts'].textTwo}
        />
      </div>
    </article>
  );
};

PotentialLayouts.propTypes = {
  typology: PropTypes.string.isRequired,
};

export default PotentialLayouts;
