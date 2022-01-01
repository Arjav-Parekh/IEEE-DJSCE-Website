import React from 'react';
import { motion } from 'framer-motion';
import styles from './FloatingLink.module.scss'
<link rel="stylesheet" href="https://kit.fontawesome.com/a28f231496.js" />

function FloatingLink() {
    const socialLinks = [
        { name: "Instagram", linkTo: "#", iconClass: "fab fa-instagram", color: "" },
        { name: "LinkedIn", linkTo: "#", iconClass: "fab fa-linkedin-in", color: "" },
        { name: "Twitter", linkTo: "#", iconClass: "fab fa-twitter", color: "" },
        { name: "Medium", linkTo: "#", iconClass: "fab fa-medium-m", color: "" },
        { name: "Gmail", linkTo: "#", iconClass: "fas fa-envelope", color: "" },
    ]

    return (
        <motion.div
            className={styles.icons}
            initial={{ x: '-100vw' }} animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 30 }}
        >
            {
                socialLinks.map((item, key) => (
                    <a href={item.linkTo} key={key}>
                        <i className={item.iconClass}></i>
                    </a>
                ))
            }
        </motion.div>
    )
}

export default FloatingLink
