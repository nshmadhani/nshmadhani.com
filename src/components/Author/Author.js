import { graphql, Link, StaticQuery, withPrefix } from 'gatsby';
import React from 'react';

import * as styles  from './Author.module.scss';

export const PureAuthor = ({ author, showBio, showTwitter, small }) => {
  const photoSize = showBio ? 60 : small ? 40 : 48;

  return (
    <div className={styles.author}>
      <div className={styles.author__header}>
        <Link to="/" className={styles.author__header_photo}>
          <img
            src={withPrefix(author.photo)}
            width={photoSize}
            height={photoSize}
            alt={author.name}
          />
        </Link>
        <div className={styles.author__header_right}>
          <h4 className={styles.author__header_right_name}>
            <Link className={styles.author__header_right_name_link} to="/" rel="author">
              {author.name}
            </Link>
            {showTwitter && ' '}
            {showTwitter && (
              <a
                style={{ fontWeight: 500 }}
                href="https://twitter.com/victorczhou"
                target="_blank"
                rel="noopener noreferrer"
              >
                @victorczhou
              </a>
            )}
          </h4>
          {showBio && (
            <p
              className={styles.author__header_right_bio}
              dangerouslySetInnerHTML={{ __html: author.bio }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const Author = props => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
            }
          }
        }
      }
    `}
    render={data => <PureAuthor {...props} author={data.site.siteMetadata.author} />}
  />
);

export default Author;
