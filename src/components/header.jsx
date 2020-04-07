import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  query {
    file(
      relativePath: { eq: "temp-hero.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
`);
  return (
    <header className="header">
      <Img
        fluid={data.file.childImageSharp.fluid}
        objectPosition="cover"
        style={{ maxHeight: '30rem' }}
      />
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
