import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import headerHouse from '../images/header-house.svg';

const Header = ({ siteTitle }) => {
  return (
    <div>
      <a href="/living-little-staging/">
        <div className="header-container">
          <div className="col-1"></div>
          <div className="col-2">
          </div>
          <div className="col-2-half">
            <div className="col-2-half-copy">
              <p>MAPC</p>
              <h1>{siteTitle}</h1>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </a>
      <section className="section">
        <div className="main-column header-intro">
          <h2>The Greater Boston region is experiencing a housing crisis stemming from lack of affordable housing and appropriate housing types for current household incomes and formations. sMAPC’s Living Little project investigates small housing typologies for MAPC’s South West Advisory Planning Committee (SWAP) and Three Rivers Interlocal Council (TRIC) subregions.</h2>
          <a href="/about/"><h3>Read more about Living Little.</h3></a>
        </div>
      </section>
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
