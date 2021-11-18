import React from 'react'
import styles from "./Profile.module.scss";

function Profile({ name, title, img }) {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__background}>
                <img src={img} alt=""></img>
            </div>
            <h3 className={styles.profile__name}>{name}</h3>
            <h5 className={styles.profile__title}>{title}</h5>
        </div>
    )
}

export default Profile
