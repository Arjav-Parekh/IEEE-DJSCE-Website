import React from "react";
import styles from "./OurVision.module.scss";
import Vision from "./Vision/Vision";



export default function OurVision() {

    const data = [
        {
            title: "Opportunity",
            caption: "We attempt to create better opportunities for a better tomorrow.",
            icon: "fas fa-tasks",
        },
        {
            title: "Education",
            caption: "We attempt to educate in and around people for a healthy future.",
            icon: "fab fa-graduation-cap",
        },
        {
            title: "Technology",
            caption: "Promoting and educating people about the newest technology for the new tomorrow.",
            icon: "fa-solid fa-microchip",
        },
    ]

    return (
        <div className={styles.baseVision}>
            <h1 className={styles.OurVision}>Our Vision</h1>
            <div className={styles.Visions}>
                {
                    data.map((item, key) => (
                        <Vision
                            icon={item.icon} key={key}
                            title={item.title}
                            caption={item.caption}
                        />
                    ))
                }
            </div>
        </div>
    )
}
