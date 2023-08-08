import React from 'react';
import styles from './NewsCircle.module.scss';

const NewsCircle = ({
  src,
  onClick,
  ...rest
}) => {
  return (
    <div className={styles.newsCircle} {...rest} onClick={onClick}>
      <img src={src} alt="circle"/>
    </div>
  )
};

export default NewsCircle;
