import React from 'react'


import * as styles from './Card.module.scss'


const Card = ({children}) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
};

const TitleWrap = ({children}) => {
  return (
    <div className={styles.titlewrap}>
      {children}
    </div>
  )
};


export {
  Card,
  TitleWrap
}