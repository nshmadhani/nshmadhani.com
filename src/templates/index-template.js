// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { useSiteMetadata } from '../hooks';
import ResponsiveHeader from '../components/ResponsiveHeader';

import Projects from '../components/Projects'
import Page from '../components/Page'


const IndexTemplate = () => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  return (
    <Layout description={siteSubtitle} title={siteTitle}>
      <ResponsiveHeader />
      <Page>
        <Projects />
      </Page>
    </Layout>
  );
};




export default IndexTemplate;
