import React from 'react'
import Collapsible from 'react-collapsible'

import * as styles  from './CardCollapse.module.scss'

const CardCollapse = ({trigger,children}) => {
  return (
    <Collapsible trigger={trigger} 
      classParentString={styles.Collapsible}
      contentInnerClassName={styles.Collapsible__contentInner}>
      {children}
    </Collapsible>
  );
};



export default  CardCollapse