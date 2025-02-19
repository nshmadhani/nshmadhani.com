// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';

import NavHeader from '../components/NavHeader'

import { useSiteMetadata } from '../hooks';


const PostTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { title: postTitle, description: postDescription = '', socialImage } = frontmatter;
  const metaDescription = postDescription || siteSubtitle;
  const socialImageUrl = socialImage?.publicURL;

  return (

    <div>

    <NavHeader/>
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImageUrl} >   
      <Post post={data.markdownRemark} />
    </Layout>
    </div>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage {
          publicURL
        }
      }
    }
  }
`;

export default PostTemplate;
