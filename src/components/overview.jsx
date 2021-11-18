import PropTypes from 'prop-types';
import React from 'react';
import definitions from '../content/full-definitions.json';
import aduTemp from '../images/adu-temp.png';
import tinyHouseTemp from '../images/tinyhouse-temp.png';
import townHouseTemp from '../images/rowhouse-temp.png';
import mixedUseTemp from '../images/mixed-use-temp.png';
import cottageTemp from '../images/cottage.gif';
import cohousingTemp from '../images/cohousingtemp.png';
import overviewAdu1 from "../images/overview-adu1.jpg";
import overviewAdu2 from "../images/overview-adu2.jpg";
import overviewTinyHouse1 from "../images/overview-tinyhouse1.jpg";
import overviewCottage1 from "../images/overview-cottage1.jpg";
import overviewSfc1 from "../images/overview-sfc1.jpg";
import overviewTownhouse1 from "../images/overview-townhouse1.jpg";
import overviewMixedUse1 from "../images/overview-mixeduse1.jpg";
import overviewCohousing1 from "../images/overview-cohousing1.jpg";


const Overview = ({ typology }) => {
  
  const overviewGif = {
    adu: aduTemp,
    tinyhouse: tinyHouseTemp,
    townhouse: townHouseTemp,
    mixeduse: mixedUseTemp,
    cottage: cottageTemp,
    cohousing: cohousingTemp,
  };

  const overviewSrc = {
      adu: [overviewAdu1],
      cottage: [overviewCottage1],
      tinyhouse: [overviewTinyHouse1],
      townhouse: [overviewTownhouse1],
      sfc: [overviewSfc1],
      mixeduse: [overviewMixedUse1],
      cohousing: [overviewCohousing1]
  };

  const overviewImages = overviewSrc[typology].map((image) => <img src={image} className="overview__image" />)

  return (
    <article className="article overview">
      <p>{definitions[typology]}</p>
      {/* <img src={overviewGif[typology]} className="overview__gif" /> */}
      {overviewImages}
    </article>
  );
};

Overview.propTypes = {
  typology: PropTypes.string.isRequired,
};

export default Overview;
