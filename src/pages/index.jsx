import React from 'react';
import Layout from '../components/modules/layout';
import SEO from '../components/modules/seo';
import TypologyGrid from '../components/typologyGrid';
import DeepDive from '../components/deepDive';
import LearnMore from '../components/learnMore';

const IndexPage = () => (
  <Layout>
    <SEO title="Living Little (Staging)" />
    <TypologyGrid />
    <DeepDive typology="adu" />
    <LearnMore />
  </Layout>
);

export default IndexPage;
