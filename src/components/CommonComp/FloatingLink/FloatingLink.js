import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from './FloatingLink.module.scss'
import { Context } from '../../ContextData';

function FloatingLink() {

    const [baseData] = useContext(Context);
    const socialLinks = baseData.floatingLinks.socialLinks;

    return (
        <motion.div
            className={styles.icons}
            initial={{ x: '-200vw' }} animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 30 }}
        >
            {
                socialLinks.map((item, key) => (
                    <a href={item.linkTo} key={key} target="_blank" rel="noreferrer" >
                        <i className={item.iconClass}></i>
                    </a>
                ))
            }
        </motion.div>
    )
}

export default FloatingLink
