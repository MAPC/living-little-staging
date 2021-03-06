import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faInstagram, faFacebookSquare, faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "svg" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
`);
  return (
    <footer className="footer">
      <section className="footer__column footer__column--about">
        <h3 className="h3 footer__title">About MAPC</h3>
        <p className="footer__paragraph">The Metropolitan Area Planning Council (MAPC) is the regional planning agency serving the people who live and work in the 101 cities and towns of Metropolitan Boston.</p>
      </section>
      <section className="footer__column footer__column--links">
        <h3 className="h3 footer__title">Quick Links</h3>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="https://metrocommon.mapc.org/" className="footer__link">MetroCommon Home</a>
          </li>
          <li className="footer__list-item">
            <a href="https://metrocommon.mapc.org/process-details" className="footer__link">MetroCommon Process Details</a>
          </li>
          <li className="footer__list-item">
            <a href="https://metrocommon.mapc.org/events" className="footer__link">MetroCommon x 2050 Events</a>
          </li>
        </ul>
      </section>
      <section className="footer__column footer__column--explore">
        <h3 className="h3 footer__title">Explore</h3>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="https://www.mapc.org/about-mapc/staff/" className="footer__link">Staff</a>
          </li>
          <li className="footer__list-item">
            <a href="https://www.mapc.org/get-involved/metrofuture-our-regional-plan/" className="footer__link">MetroFuture</a>
          </li>
          <li className="footer__list-item">
            <a href="https://datacommon.mapc.org/" className="footer__link">DataCommon</a>
          </li>
          <li className="footer__list-item">
            <a href="https://www.massbuilds.com/map" className="footer__link">MassBuilds</a>
          </li>
          <li className="footer__list-item">
            <a href="https://trailmap.mapc.org/" className="footer__link">Trailmap</a>
          </li>
        </ul>
      </section>
      <section className="footer__column footer__column--contact">
        <h3 className="h3 footer__title">Contact Us</h3>
        <a href="https://goo.gl/maps/5GP7YcEtS1E2" className="footer__link">60 Temple Place,</a>
        <br />
        <a href="https://goo.gl/maps/5GP7YcEtS1E2" className="footer__link">Boston, MA 02111</a>
        <br />
        <a href="tel:617-933-0700" className="footer__link">617-933-0700</a>
        <p className="footer__paragraph">
          <a href="https://metrocommon.mapc.org" className="footer__link">metrocommon.mapc.org</a>
        </p>
      </section>
      <div className="footer__image-block">
        <a href="https://mapc.org" className="footer__link footer__logo">
          <img src={data.allFile.edges[0].node.publicURL} alt="MAPC Logo" className="footer__logo" />
        </a>
        <div className="footer__social-list">
          <a href="https://twitter.com/MAPCMetroBoston" className="footer__link footer__icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com/mapcmetroboston" className="footer__link footer__icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com/MAPCMetroBoston" className="footer__link footer__icon">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href="https://www.linkedin.com/company/metropolitan-area-planning-council" className="footer__link footer__icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
