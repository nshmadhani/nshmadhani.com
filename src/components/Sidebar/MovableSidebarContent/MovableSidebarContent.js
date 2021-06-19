// @flow;
import React from 'react';

import Contacts from '../Contacts';
import Copyright from '../Copyright';
import DisplayIf from '../../DisplayIf';



export const MovableSidebarContent = ({
  mobile,
  desktop,
  author,
  copyright
}) => {
  return (
    <DisplayIf mobile={mobile} desktop={desktop}>
      <Contacts contacts={author.contacts} />
      <Copyright copyright={copyright} />
    </DisplayIf>
  );
};


export default MovableSidebarContent;
