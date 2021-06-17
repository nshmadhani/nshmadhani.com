// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const IndexTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  return (
    <Layout description={siteSubtitle}>
        <Sidebar isIndex />
        <Page title={siteTitle}>
            {/* <div dangerouslySetInnerHTML={{ __html: pageBody }} /> */}
        </Page>
    </Layout>
  );
};

// export const query = graphql`
//   query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    
//   }
// `;

export default IndexTemplate;
