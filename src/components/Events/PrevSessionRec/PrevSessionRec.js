import React from 'react';
import styles from "./PrevSessionRec.module.scss";

const PrevSessionRec = () => {
  return (
    <div className={styles.prevSessionRec}>
      <h1 className={styles.prevSessionRecTitle}>Our Previous Session...</h1>      
      <div className={styles.recWrap}>
        <iframe src="https://www.youtube.com/embed/wBpoGtTkbDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
      </div>
    </div>
  )
}

export default PrevSessionRec
