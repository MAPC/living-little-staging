import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SubtopicHeader from './subtopicHeader';
import OpportunityButton from './opportunityButton';
import opportunties from '../content/opportunities.json';

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
  return (
    <article className="article">
      <SubtopicHeader title="Potential Layouts" highlightWidth={193} />
      <Img fixed={data.aduOneFloor.childImageSharp.fixed} className="potential-layouts__img" />
      <Img fixed={data.aduTwoFloors.childImageSharp.fixed} className="potential-layouts__img" />
      <p className="potential-layouts__paragraph">Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Faucibus et molestie ac feugiat. Neque aliquam vestibulum morbi blandit cursus. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Gravida rutrum quisque non tellus orci. Sed blandit libero volutpat sed cras. Iaculis at erat pellentesque adipiscing commodo elit. Eget magna fermentum iaculis eu non diam phasellus. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nisi quis eleifend quam adipiscing vitae. Nulla facilisi morbi tempus iaculis urna. Et malesuada fames ac turpis egestas sed tempus urna et. Risus commodo viverra maecenas accumsan lacus vel.</p>
      <p className="potential-layouts__paragraph">Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Sit amet volutpat consequat mauris nunc congue. Sapien et ligula ullamcorper malesuada proin. At ultrices mi tempus imperdiet nulla. Non sodales neque sodales ut etiam sit. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Nunc sed augue lacus viverra vitae congue eu consequat ac. In eu mi bibendum neque egestas congue quisque egestas diam. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Aliquet nibh praesent tristique magna sit amet. Amet dictum sit amet justo. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Ultrices gravida dictum fusce ut placerat orci.</p>
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
