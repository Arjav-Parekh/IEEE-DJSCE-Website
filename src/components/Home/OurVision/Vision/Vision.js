import React from 'react'
import styles from './Vision.module.scss';
import cx from "classnames";

export default function Vision({ icon, title, caption }) {
    return (
        <div className={styles.vision}>
            {/* <img src={img} alt="server error" className={styles.vision__img} /> */}
            <i className={cx(icon, cx("fa-6x", styles.vision__img))}></i>
            <h2 className={styles.vision__title}>{title}</h2>
            <p className={styles.vision__caption}>{caption} </p>
        </div>
    )
}



