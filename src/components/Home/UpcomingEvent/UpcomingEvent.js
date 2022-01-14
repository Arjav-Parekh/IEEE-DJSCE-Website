import React from 'react'
import img from './UpcomingEvent.png'
import styles from './UpcomingEvent.module.scss'

export default function UpcomingEvent({data}) {
    return (
        <div className={styles.upcomingEvent}>
            <h1 className={styles.title}>Upcoming Event</h1>
            <div className={styles.contentDiv}>
                <div className={styles.imgWrap}>
                    <img src={data.posterImg} alt="Upcoming Event" className={styles.image}/>
                </div>
                <div className={styles.btnWrap}>
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}
