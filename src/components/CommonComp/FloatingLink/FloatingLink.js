import React from 'react'
import styles from './FloatingLink.module.scss'
<link rel="stylesheet" href="https://kit.fontawesome.com/a28f231496.js" />

function FloatingLink() {
    const socialLinks = [
        { name: "Instagram", linkTo: "#", iconClass: "fa-brands fa-instagram", color: "" },
        { name: "LinkedIn", linkTo: "#", iconClass: "fab fa-linked-in", color: "" },
        { name: "Twitter", linkTo: "#", iconClass: "fab fa-twitter", color: "" },
        { name: "Medium", linkTo: "#", iconClass: "fa-brands fa-medium", color: "" },
        { name: "Gmail", linkTo: "#", iconClass: "fab fa-envelope", color: "" },
    ]

    return (
        <div className={styles.icons}>
            {
                socialLinks.map((item, key) => (
                    <a href={item.linkTo} key={key}>
                        <i className={item.iconClass}></i>
                    </a>
                ))
            }
        </div>
    )
}

export default FloatingLink
