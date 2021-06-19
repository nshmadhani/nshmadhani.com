// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import * as styles  from './Author.module.scss';
import DarkModeToggle from '../..//DarkModeToggle'


const Author = ({ author}) => (
  <div className={styles.author}>
    <div className={styles.author__main_section}>
      <Link to="/">
        <img src={withPrefix(author.photo)} className={styles.author__photo} alt={author.name} />
      </Link>
      <div className={styles.author__title}>
        <h1>
          <Link className={styles.author__title__link} to="/">
            {author.name}
          </Link>
        </h1>
        <DarkModeToggle />
      </div>
    </div>
    <p className={styles.author__subtitle} dangerouslySetInnerHTML={{ __html: author.bio }} />
  </div>
);

export default Author;
