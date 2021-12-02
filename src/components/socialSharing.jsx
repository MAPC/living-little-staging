import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import testPdf from "../assets/SS_LL_Report.pdf";
import PropTypes from 'prop-types';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const SocialSharing = ({typology}) => {
  
  const pdf = {
    adu: testPdf,
    cottage: testPdf,
    tinyhouse: testPdf,
    townhouse: testPdf,
    sfc: testPdf,
    mixeduse: testPdf,
    cohousing: testPdf
  };

  return (
  <div className="social-sharing__wrapper">
    <FontAwesomeIcon icon={faTwitter} className="social-sharing__icon social-sharing__icon--twitter" />
    <FontAwesomeIcon icon={faFacebook} className="social-sharing__icon social-sharing__icon--facebook" />
    <FontAwesomeIcon icon={faLinkedin} className="social-sharing__icon social-sharing__icon--linkedin" />
    <FontAwesomeIcon icon={faEnvelope} className="social-sharing__icon social-sharing__icon--email" />
    <FontAwesomeIcon icon={faPrint} className="social-sharing__icon social-sharing__icon--print" />
    <a href={pdf[typology]}>Download PDF</a>
    <a 
      class="twitter-share-button"
      href="https://twitter.com/intent/tweet?text=Hello%20world?url=https://mapc.github.io/living-little-staging/"
      // data-text="custom share text"
      // data-url="https://mapc.github.io/living-little-staging/"
      // data-hashtags="livinglittle"
    >
      Tweet
    </a>
    {/* <TwitterShareButton /> */}
  </div>
)};

export default SocialSharing;
