import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import headerHouse from '../images/header-house.svg';

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
    <div>
      <div className="header-container">
        <div className="col-1"></div>
        <div className="col-2">
          <div className="col-2-half">
            <p>MAPC presents</p>
            <h1>living little</h1>
          </div>
          <div className="col-2-clip"></div>
        </div>
        <div className="col-3"></div>
      </div>

      {/* <Img
        fluid={data.file.childImageSharp.fluid}
        objectPosition="cover"
        style={{ maxHeight: '30rem' }}
      /> */}
      {/* <img id="header-house" src={headerHouse} /> */}

    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
