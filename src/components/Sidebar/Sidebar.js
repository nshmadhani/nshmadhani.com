// @flow strict
import React from 'react';
import Author from './Author';
import Menu from './Menu';

import MovableSidebarContent from './MovableSidebarContent';

import * as styles  from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';


const Sidebar = ({ isIndex }) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__inner}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <MovableSidebarContent desktop author={author}  copyright={copyright} /> 
      </div>
    </div>
  );
};





export default Sidebar;
