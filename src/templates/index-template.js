// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMarkdownRemark } from '../types';
import { author } from '../../config';
import DisplayIf from '../components/DisplayIf';
import NavHeader from '../components/NavHeader'
import ResponsiveHeader from '../components/ResponsiveHeader';
type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const IndexTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  return (
    <Layout description={siteSubtitle} title={author.name}>
        
        <ResponsiveHeader/>
        
        <Page title={siteTitle}>
            {/* <div dangerouslySetInnerHTML={{ __html: pageBody }} /> */}
        </Page>
    </Layout>
  );
};


export default IndexTemplate;
