import React, { useContext } from 'react';
import { Context } from '../../ContextData';
import styles from "./EventImgGrid.module.scss";

const EventImgGrid = () => {
    
    const [baseData] = useContext(Context);
    const imgGridArr = baseData.event.imgGrid;
    return (
        <div className={styles.eventImgGrid}>
            <h1 className={styles.eventImgGridTitle}>Some of our Event Snippets...</h1>
            <div className={styles.imgGrid}>
                {
                    imgGridArr.map((item, key)=>(
                        <img src={item} className={styles.imgFluid} key={key} alt="" />
                    ))
                }
            </div>
        </div>
    )
}

export default EventImgGrid
