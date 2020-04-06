import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  {
    fileName: file(relativePath: {eq: "temp-hero.png"}) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          src
        }
      }
    }
  }
  
`);
  return (
    <header className="header" style={{width: "100%"}}>
      <img src={data.fileName.childImageSharp.fluid.src} style={{width: "100%"}}/>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
