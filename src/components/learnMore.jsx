import React from 'react';
import CallToAction from './callToAction';
import report from '../content/report.pdf'

const LearnMore = () => (
  <section className="section main-column">
    <p className="learn-more__text">Dig deeper into Living Little with these additional resources:</p>
    <div className="learn-more__row">
      <CallToAction title="About Living Little" description="Read the project background" resource="/living-little-staging/about/" />
      <CallToAction title="Full Report" description="Read the original Living Little report" resource={report} />
      <CallToAction title="One Small Question" description="Print all of the Small Questions about Living Little" resource={report} />
      <CallToAction title="Case Studies" description="Take a closer look at all of our case studies" resource={report} />
    </div>
  </section>
);

export default LearnMore;
