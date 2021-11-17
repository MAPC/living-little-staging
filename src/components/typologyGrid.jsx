import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GridItem from './gridItem';

const TypologyGrid = () => {
  const data = useStaticQuery(graphql`
  {
    adu: file(relativePath: {eq: "grid/adu.jpg"}) {
      childImageSharp {
        fixed(width: 640, height: 427) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    cottage: file(relativePath: {eq: "grid/cottage.jpg"}) {
      childImageSharp {
        fixed(width: 592, height: 640) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    tinyhouse: file(relativePath: {eq: "grid/tinyhouse.jpg"}) {
      childImageSharp {
        fixed(width: 640, height: 457) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    townhouse: file(relativePath: {eq: "grid/tinyhouse.jpg"}) {
      childImageSharp {
        fixed(width: 640, height: 457) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    sfc: file(relativePath: {eq: "grid/tinyhouse.jpg"}) {
      childImageSharp {
        fixed(width: 640, height: 457) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    mixeduse: file(relativePath: {eq: "grid/tinyhouse.jpg"}) {
      childImageSharp {
        fixed(width: 640, height: 457) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    cohousing: file(relativePath: {eq: "grid/tinyhouse.jpg"}) {
      childImageSharp {
        fixed(width: 640, height: 457) {
          ...GatsbyImageSharpFixed
        }
      }
    },
  }
`);
  return (
    <section className="section">
      <div className="main-column">
        <div className="typology-grid-container">
          <div className="typology-grid-text">
            <h2 className="h2">What are the types of <br/>living little?</h2>
            <div className="dropdown__shadow" style={{ width: "174px" }}></div>
            <p>What some of the alternative housing opportunities available to meet an ever growing demand for housing in the region?</p>
            <p>Here are seven alternative housing opportunities:</p>
          </div>
          <GridItem typology="adu" image={data.adu.childImageSharp.fixed} />
          <GridItem typology="cottage" image={data.cottage.childImageSharp.fixed} />
          <GridItem typology="tinyhouse" image={data.tinyhouse.childImageSharp.fixed} />
          <GridItem typology="townhouse" image={data.townhouse.childImageSharp.fixed} />
          <GridItem typology="sfc" image={data.sfc.childImageSharp.fixed} />
          <GridItem typology="mixeduse" image={data.mixeduse.childImageSharp.fixed} />
          <GridItem typology="cohousing" image={data.cohousing.childImageSharp.fixed} />
        </div>
      </div>
    </section>
  );
}

export default TypologyGrid;
