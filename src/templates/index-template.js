// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMarkdownRemark } from '../types';
import { author } from '../../config';
import ResponsiveHeader from '../components/ResponsiveHeader';
import Page from '../components/Page'
import CardCollapse from '../components/CardCollapse'

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const IndexTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const { title: pageTitle, description: pageDescription = '', socialImage } = frontmatter;
  
  

  return (
    <Layout description={siteSubtitle} title={author.name}>
      <ResponsiveHeader />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
query {
  markdownRemark(
  fields: {
    slug: {
      eq: "/pages/about/"
    }
  }
){
    id
    html
    frontmatter {
      title
      date
      description
      socialImage {
        publicURL
      }
    }
  }
}
`


export default IndexTemplate;
