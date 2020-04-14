import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

const SocialSharing = () => (
  <div className="social-sharing__wrapper">
    <FontAwesomeIcon icon={faTwitter} className="social-sharing__icon social-sharing__icon--twitter" />
    <FontAwesomeIcon icon={faFacebook} className="social-sharing__icon social-sharing__icon--facebook" />
    <FontAwesomeIcon icon={faLinkedin} className="social-sharing__icon social-sharing__icon--linkedin" />
    <FontAwesomeIcon icon={faEnvelope} className="social-sharing__icon social-sharing__icon--email" />
    <FontAwesomeIcon icon={faPrint} className="social-sharing__icon social-sharing__icon--print" />
  </div>
);

export default SocialSharing;
