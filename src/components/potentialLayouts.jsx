import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SubtopicHeader from './subtopicHeader';
import OpportunityButton from './opportunityButton';
import opportunties from '../content/opportunities.json';
import potentialLayouts from '../content/potential-layouts.json';

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

  return (
    <article className="article">
      <SubtopicHeader title="Potential Layouts" highlightWidth={193} />
      {potentialLayoutParagraphs}
      <Img fixed={data.aduOneFloor.childImageSharp.fixed} className="potential-layouts__img" />
      <Img fixed={data.aduTwoFloors.childImageSharp.fixed} className="potential-layouts__img" />
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
