import React from 'react';
import Layout from '../components/modules/layout';
import SEO from '../components/modules/seo';
import TypologyGrid from '../components/typologyGrid';
import DeepDive from '../components/deepDive';
import LearnMore from '../components/learnMore';

const RowHouse = () => (
  <Layout>
    <SEO title="Living Little (Staging)" />
    <TypologyGrid />
    <DeepDive typology="rowhouse" />
    <LearnMore />
  </Layout>
);

export default RowHouse;
