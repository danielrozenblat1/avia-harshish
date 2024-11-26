import React from 'react';
import styles from './Loader.module.css';

const LoadingEffect = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
      <span className={styles.text}>טוען...</span>
    </div>
  );
};

export default LoadingEffect;