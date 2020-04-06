import React from 'react';
import Layout from '../components/modules/layout';
import SEO from '../components/modules/seo';
import TypologyGrid from '../components/typologyGrid';
import TypologyDeepDive from '../components/typologyDeepDive';
import CaseStudies from '../components/caseStudies';
import LearnMore from '../components/learnMore';

const IndexPage = () => (
  <Layout>
    <SEO title="Living Little (Staging)" />
    <TypologyGrid />
    <TypologyDeepDive />
    <CaseStudies />
    <LearnMore />
  </Layout>
);

export default IndexPage;
