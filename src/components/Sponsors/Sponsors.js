import React, { useContext } from 'react'
import Nav from '../CommonComp/Nav/Nav'
import Footer from '../CommonComp/Footer/Footer'
import Sponsor from './Sponsor/Sponsor'
import styles from "./Sponsors.module.scss"
import { Context } from '../ContextData'
import ScrollTop from '../CommonComp/ScrollTop/ScrollTop'
import Scrollpop from '../CommonComp/ScrollPop/ScrollPop'
import FloatingLink from '../CommonComp/FloatingLink/FloatingLink'

const Sponsors = () => {
  
  const [baseData] = useContext(Context);
  const data = baseData.sponsor.data;
  
  return (
    <div>
      <Nav />
      <h1 className={styles.ourSponsors}>Our Sponsors</h1>
      <div className={styles.sponsorContainer}>
        {
          data.map((item, key) => (
            <Sponsor img={item.img} key={key} website={item.website} name={item.name} />
          ))
        }
      </div>
      <ScrollTop />
      <Scrollpop />
      <FloatingLink />
      <Footer />
    </div>
  )
}

export default Sponsors
