import React from 'react'
import styles from "./Profile.module.scss";

function Profile({ name, title, img, jrs, backColor, newBackCol = ["#C8C0ED", "#dee2e6", "#9F9CAD", "#B6B1C9"] }) {

    const ToolTipComp = () => {

        const comp = (
            jrs.length > 0 ? (
                <div className={styles.profile__tooltip}>
                    {
                        jrs.map((jr) => {
                            return <div>{jr}</div>
                        })
                    }
                </div>
            ) : null)

        return comp;
    }

    return (
        <div className={styles.profile}>
            <div className={styles.profile__background} style={{ "backgroundColor": newBackCol[Math.floor(Math.random()*(newBackCol.length))] }}>
                <img src={img} alt=""></img>
            </div>
            <ToolTipComp />
            <h3 className={styles.profile__name}>{name}</h3>
            <h5 className={styles.profile__title}>{title}</h5>
        </div>
    )
}

export default Profile
