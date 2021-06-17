
// @flow strict
import React from 'react';
import DisplayIf from '../DisplayIf';
import NavHeader from '../NavHeader';
import Sidebar from '../Sidebar';



const ResponsiveHeader = () => {

  return (
    <div >
        <DisplayIf desktop>
            <Sidebar />
        </DisplayIf>
        <DisplayIf mobile>
            <NavHeader />
        </DisplayIf>
        
    </div>
  );
};





export default ResponsiveHeader;
