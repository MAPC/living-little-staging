import React from 'react';

const CaseStudies = () => (
  <section className="section case-studies">
    <div className="case-studies__wrapper">
      <h2 className="h2 case-studies__title">Case studies</h2>
      <div className="slides__wrapper">
        <iframe
          className="slides__embed"
          src="//slides.com/mapc/deck/embed?style=light"
          scrolling="no"
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      </div>
    </div>
  </section>
);

export default CaseStudies;
