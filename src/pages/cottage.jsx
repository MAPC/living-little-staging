import React from 'react';
import Layout from '../components/modules/layout';
import SEO from '../components/modules/seo';
import TypologyGrid from '../components/typologyGrid';
import DeepDive from '../components/deepDive';
import CaseStudies from '../components/caseStudies';
import LearnMore from '../components/learnMore';

const Cottage = () => (
  <Layout>
    <SEO title="Living Little (Staging)" />
    <TypologyGrid />
    <DeepDive typology="cottage" />
    <CaseStudies />
    <LearnMore />
  </Layout>
);

export default Cottage;
