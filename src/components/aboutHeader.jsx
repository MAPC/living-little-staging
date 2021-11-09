import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const AboutHeader = ({siteTitle}) => {
    return (
        <div className="about-header-container">
            <div className="about-header-content">
                <div className="about-header-content-link">
                    <Link to="/">Return to Home Page</Link>
                </div>
                <div className="about-header-content-title">
                    <h1>{siteTitle}</h1>
                </div>
            </div>
        </div>
    );
};

AboutHeader.propTypes = {
    siteTitle: PropTypes.string,
};
  
AboutHeader.defaultProps = {
    siteTitle: '',
};

export default AboutHeader;