import PropTypes from 'prop-types';
import React from 'react';
import SocialSharing from './socialSharing';
import definitions from '../content/definitions.json';
import aduTemp from '../images/adu-temp.png';
import tinyHouseTemp from '../images/tinyhouse-temp.png';
import rowHouseTemp from '../images/rowhouse-temp.png';
import mixedUseTemp from '../images/mixed-use-temp.png';
import cottageTemp from '../images/cottage.gif';
import cohousingTemp from '../images/cohousingtemp.png';

const Overview = ({ typology }) => {
  const overviewGif = {
    adu: aduTemp,
    'tiny house': tinyHouseTemp,
    'row house': rowHouseTemp,
    'mixed-use': mixedUseTemp,
    cottage: cottageTemp,
    cohousing: cohousingTemp,
  };

  return (
    <article className="article overview">
      <p>{definitions[typology]}</p>
      <img src={overviewGif[typology]} className="overview__gif" />
      <SocialSharing />
    </article>
  );
};

Overview.propTypes = {
  typology: PropTypes.string.isRequired,
};

export default Overview;
