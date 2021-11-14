import React from "react";
import PropTypes from "prop-types";
import SubtopicHeader from "./subtopicHeader";
import advantages from "../content/advantages.json";

const Advantages = ({typology}) => {
    const advantagesLi = advantages[typology].advantages.map((li) => 
        <div className="advantages__copy">
            <li className="advantages__copy-li">{li}</li>
        </div>
    );

    const whyLi = advantages[typology].why.map((li) => 
        <div className="why__copy">
            <li className="why__copy-li">{li}</li>
        </div>
    );
    
    const advantagesTitle = {
        adu: {
            title: "ADUs",
            width: "355"
        },
        cottage: {
            title: "Cottage Developments",
            width: "532"
        },
        tinyhouse: {
            title: "Tiny Houses",
            width: "422"
        },
        townhouse: {
            title: "Townhouses",
            width: "422" // need to adjust
        },
        sfc: {
            title: "Single-Family Conversions",
            width: "422" // need to adjust
        },
        mixeduse: {
            title: "Small Scale Mixed-Use Developments",
            width: "682"
        },
        cohousing: {
            title: "Cohousing",
            width: "408"
        }
    };

    const whyTitle = {
        adu: {
            title: "ADUs",
            width: "328"
        },
        cottage: {
            title: "Cottage Developments",
            width: "532"
        },
        tinyhouse: {
            title: "Tiny Houses",
            width: "422"
        },
        townhouse: {
            title: "Townhouses",
            width: "422" // need to adjust
        },
        sfc: {
            title: "Single-Family Conversions",
            width: "422" // need to adjust
        },
        mixeduse: {
            title: "Small Scale Mixed-Use Developments",
            width: "682"
        },
        cohousing: {
            title: "Cohousing",
            width: "408"
        }
    };

    return (
        <div>
            <article className="advantages">
                <SubtopicHeader title={`Cool Things to Know About ${advantagesTitle[typology].title}`} highlightWidth={advantagesTitle[typology].width} />
                {advantagesLi}
            </article>
            <article className="why">
                <SubtopicHeader title={`So Why Don't I See More ${whyTitle[typology].title}`} highlightWidth={whyTitle[typology].width} />
                {whyLi}
            </article>
        </div>
    );
};

export default Advantages;