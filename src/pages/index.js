import React from "react"
import Layout from "../components/modules/layout"
import SEO from "../components/modules/seo"
import TypologyGrid from '../components/typologyGrid'
import TypologySelect from '../components/typologySelect'
import CaseStudies from '../components/caseStudies'
import LearnMore from '../components/learnMore'

const IndexPage = () => (
  <Layout>
    <SEO title="Living Little (Staging)" />
    <TypologyGrid />
    <TypologySelect />
    <CaseStudies />
    <LearnMore />
  </Layout>
)

export default IndexPage
