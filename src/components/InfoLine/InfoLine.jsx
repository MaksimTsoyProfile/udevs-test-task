import React from 'react';
import styles from './InfoLine.module.scss';

const InfoLine = ({
  date,
  views,
}) => {
  return (
    <div className={styles.info}>
      <span>{date}</span>
      <span className={styles.divider}>|</span>
      <img src='/eye.png' alt="circle"/>
      <span>{views}</span>
    </div>
  )
};

export default InfoLine;
