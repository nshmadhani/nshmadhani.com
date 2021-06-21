// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { useSiteMetadata } from '../hooks';
import ResponsiveHeader from '../components/ResponsiveHeader';

import Projects from '../components/Projects'
import Page from '../components/Page'


const PorjectTemplate = () => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  return (
    <Layout description={siteSubtitle} title={siteTitle}>
      <ResponsiveHeader />
      <Page>
        <Projects limit={4} />
      </Page>
    </Layout>
  );
};




export default PorjectTemplate;
