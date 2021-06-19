// @flow strict
import React from 'react';
import * as styles  from './Meta.module.scss';


const Meta = ({ date }) => (
  <div className={styles.meta}>
    <p className={styles.meta__date}>Published {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
  </div>
);

export default Meta;
