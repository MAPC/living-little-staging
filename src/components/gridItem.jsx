import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const GridItem = ({ typology }) => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "grid/adu.jpg" }) {
      childImageSharp {
        # Specify a fixed image and fragment.
        # The default width is 400 pixels
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);
  return (
    <div className="cell__wrapper">
      <h3 className="h3 cell__title">{typology}</h3>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
      />
    </div>
  );
};

GridItem.propTypes = {
  typology: PropTypes.node.isRequired,
};
export default GridItem;
