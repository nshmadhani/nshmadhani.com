import styled from "styled-components";

import React from 'react';

import * as styles from './Grid.module.scss'


const Grid = ({children}) => {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    )
}
const Item = ({children}) => {
    return (
        <div className={styles.item}>
            {children}
        </div>
    )
}

export { 
    Grid,
    Item
}


