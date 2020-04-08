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
  }
`);
  return (
    <section className="section main-column">
      <h2 className="h2">What is living little?</h2>
      <GridItem typology="adu" image={data.adu.childImageSharp.fixed} />
      <GridItem typology="cottage" image={data.cottage.childImageSharp.fixed} />
      <GridItem typology="tinyhouse" image={data.tinyhouse.childImageSharp.fixed} />
    </section>
  );
}

export default TypologyGrid;
