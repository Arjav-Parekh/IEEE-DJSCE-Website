import React, { useContext } from 'react';
import styles from "./Footer.module.scss";
import { Context } from '../../ContextData'
import { Link } from 'react-router-dom';
// import img from "../../../images/Footer_withoutBg_cropped.png";

const Footer = () => {

  const [baseData] = useContext(Context);
  const IEEELogoImg = baseData.navLogo;

  const footerAboutLinks = [
    { name: "About Us", link: "aboutUs" },
    { name: "Events", link: "events" },
    { name: "Sponsors", link: "sponsors" },
    { name: "Our Team", link: "teams" },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>

        <div className={styles.footerBrand}>
          <img src={IEEELogoImg} alt="" />
        </div>

        <div className={styles.footerElements}>

          <div>
            <h1>About</h1>
            <div className={styles.footerLinks}>
              {
                footerAboutLinks.map((item, key) => (
                  <div className={styles.footerRouteLink} key={key}>
                    <Link to={`/${item.link}`}>{item.name}</Link>
                  </div>
                ))
              }
            </div>
          </div>

          <div>
            <h1>Contact</h1>
            <div className={styles.footerLinks}>
              <div>Email</div>
              <div>Ambar Mehta: </div>
              <div>Naman Sanghvi: </div>
            </div>
          </div>

          <div>
            <h1>Address</h1>
            <div className={styles.footerLinks}>
              <div>Dwarkadas J. Sanghvi College of Engineering, Vile Parle West, Mumbai-400056</div>
            </div>
          </div>

        </div>

        <div className={styles.copyContent}>
          <div><hr /></div>
          <div className={styles.footerCopyright}>
            &copy; 2020 DJSCE IEEEBainwaves - All Rights Reserved
            {/* <br /> */}
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer
