import React, { useContext } from 'react'
import FloatingLink from '../CommonComp/FloatingLink/FloatingLink';
import Footer from '../CommonComp/Footer/Footer';
import Nav from '../CommonComp/Nav/Nav'
import Scrollpop from '../CommonComp/ScrollPop/ScrollPop';
import ScrollTop from '../CommonComp/ScrollTop/ScrollTop';
import { Context } from '../ContextData';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import styles from "./Home.module.scss"
import OurEvents from './OurEvents/OurEvents';
import OurVision from './OurVision/OurVision';
import UpcomingEvent from './UpcomingEvent/UpcomingEvent';

const Home = () => {  
  
  const [baseData] = useContext(Context)
  return (
    <div className={styles.home}>
      <div className={styles.homeNav}>
        <Nav />
      </div>
      <Banner />
      <div className={styles.flexDiv}>
        <OurVision />
        <OurEvents />
        <UpcomingEvent data={baseData.home.upcomingEvent} />
        <Blogs />
      </div>
      <ScrollTop />
      <FloatingLink/>
      <Scrollpop />
      <Footer />
    </div>
  )
}

export default Home
