// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import * as styles  from './Feed.module.scss';


const Feed = ({edges}) => (
  <div className={styles.feed}>
    {edges.map((edge) => (
      <div className={styles.feed__item} key={edge.node.fields.slug}>
        <div className={styles.feed__item_meta}>
          <time className={styles.feed__item_meta_time} dateTime={ new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}>
          { new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
          </time>
          <span className={styles.feed__item_meta_divider} />
          <span className={styles.feed__item_meta_category}>
            <Link to={edge.node.fields.categorySlug} className={styles.feed__item_meta_category_link}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className={styles.feed__item_title}>
          <Link className={styles.feed__item_title_link} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles.feed__item_description}>{edge.node.frontmatter.description}</p>
        <Link className={styles.feed__item_readmore} to={edge.node.fields.slug}>Read</Link>
      </div>
    ))}
  </div>
);

export default Feed;
