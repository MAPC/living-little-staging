import React from 'react';
import Layout from '../components/modules/layout';
import SEO from '../components/modules/seo';
import TypologyGrid from '../components/typologyGrid';
import DeepDive from '../components/deepDive';
import LearnMore from '../components/learnMore';
import ContextVideos from '../components/contextVideos';

const Adu = () => (
  <Layout>
    <SEO title="Living Little (Staging)" />
    <TypologyGrid />
    <ContextVideos />
    <DeepDive typology="adu" />
    <LearnMore />
  </Layout>
);

export default Adu;
