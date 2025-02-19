// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import { useSiteMetadata } from '../../hooks';
import * as styles  from './Layout.module.scss';


const Layout = ({
  children,
  title,
  description,
  socialImage = ''
}) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage || author.photo;
  const metaImageUrl = url + metaImage;

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
