// @flow;
import React from 'react';

import Contacts from '../Contacts';
import Copyright from '../Copyright';
import DisplayIf from '../../DisplayIf';


type Props = {
  +mobile?: boolean,
  +desktop?: boolean,
  author: Object,
  copyright?: String,
};



export const MovableSidebarContent = ({
  mobile,
  desktop,
  author,
  copyright
}: PureProps) => {
  return (
    <DisplayIf mobile={mobile} desktop={desktop}>
      <Contacts contacts={author.contacts} />
      <Copyright copyright={copyright} />
    </DisplayIf>
  );
};


export default MovableSidebarContent;
