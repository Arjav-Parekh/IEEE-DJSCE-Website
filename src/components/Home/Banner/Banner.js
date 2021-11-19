import React from 'react';
import styles from "./Banner.module.scss";
import cx from "classnames";
import img from "../../../images/Banner_withoutBg_cropped.png";

const Banner = () => {

  const bannerStyles = {
    backgroundSize: 'cover',
    backgroundImage: `url(${img})`,
    backgroundPosition: 'center center',
  }

  return (
    <header className={styles.banner} style={bannerStyles}>

      <div className={styles.bannerText}>

        <div className={styles.statement}>
          <h1 className={cx(styles.statElement, styles.envision)}>Envision</h1>
          <h1 className={cx(styles.statElement, styles.execute)}>Execute</h1>
          <h1 className={cx(styles.statElement, styles.excel)}>Excel</h1>
        </div>
        <h3 className={styles.description}>
          IEEE Brainwaves is the official IEEE Student branch of Dwarkadas J. Sanghvi College of Engineering. <br /> We believe in leveraging technology for better tomorrow.
        </h3>
      </div>
    </header>
  )
}

export default Banner
