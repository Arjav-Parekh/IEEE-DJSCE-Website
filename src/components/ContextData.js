import React, { createContext } from 'react'
import navLogoImg from "../images/IEEELogo.svg";
import testImg from "../images/homePageEventsCarousel.svg";

// Home
import upcomingEventPoster from "../images/gitup_homeEvents.png"

// Sponsor
import cob_img from "../images/Sponsors/codingBlock_logo.png"
import con_img from "../images/Sponsors/codingNinja_logo.svg"
import inb_img from "../images/Sponsors/InterviewBuddy_logo.png"
import gfg_img from "../images/Sponsors/gfg_.png"
import afs_img from "../images/Sponsors/a-fragrance-story-logo.png"
import bal_img from "../images/Sponsors/Bade Log.png"
import ddm_img from "../images/Sponsors/Dudeme.png"
import prb_img from "../images/Sponsors/Prep Bytes.png"
import spb_img from "../images/Sponsors/spinbot_logo.jpg"
import syb_img from "../images/Sponsors/SYBGEN-1.png"

// Event
import event2 from "../images/Events/2.jpeg";
import event3 from "../images/Events/3.jpeg";
import event4 from "../images/Events/4.jpeg";
import event5 from "../images/Events/5.jpeg";

export const Context = createContext();

export const DataProvider = (props) => {
  const baseData = {
    name: "IEEE",
    navLogo: navLogoImg,

    floatingLinks: {
      socialLinks: [
        { name: "Instagram", linkTo: "https://www.instagram.com/ieee_djscoe", iconClass: "fab fa-instagram", color: "" },
        { name: "LinkedIn", linkTo: "https://www.linkedin.com/companies/IEEE-Brainwaves", iconClass: "fab fa-linkedin-in", color: "" },
        { name: "Twitter", linkTo: "https://twitter.com/ieeebrainwaves", iconClass: "fab fa-twitter", color: "" },
        { name: "Medium", linkTo: "https://ieeebrainwaves.medium.com/", iconClass: "fab fa-medium-m", color: "" },
        { name: "Gmail", linkTo: "mailto:contact@ieeedjsce.com", iconClass: "fas fa-envelope", color: "" },
      ],
    },

    home: {
      upcomingEvent: {
        posterImg: upcomingEventPoster,
        link: '#',
      }
    },

    sponsor: {
      data: [
        {
          img: con_img,
          website: "https://www.codingninjas.com/",
          email: "",
          name: "Coding Ninjas"
        },
        {
          img: cob_img,
          website: "https://codingblocks.com/",
          email: "",
          name: "Coding Blocks"
        },
        {
          img: gfg_img,
          website: "https://www.geeksforgeeks.org/",
          email: "campus@geeksforgeeks.org",
          name: "GeeksforGeeks"
        },
        {
          img: afs_img,
          website: "https://afragrancestory.in/",
          email: "",
          name: "A Fragnance Story"
        },
        {
          img: bal_img,
          website: "https://badelog.in/",
          email: "",
          name: "Bade Log"
        },
        {
          img: ddm_img,
          website: "https://www.dudeme.in/",
          email: "",
          name: "Dude Me"
        },
        {
          img: inb_img,
          website: "https://interviewbuddy.in/",
          email: "",
          name: "InterviewBuddy"
        },
        {
          img: prb_img,
          website: "https://www.prepbytes.com/",
          email: "",
          name: "PrepBytes"
        },
        {
          img: spb_img,
          website: "https://spinbot.co.in/",
          email: "",
          name: "SpinBot"
        },
        {
          img: syb_img,
          website: "https://sybgen.com/",
          email: "",
          name: "SYBGEN"
        }
      ],
    },

    event: {
      imgGrid: [event2, event3, event4, event5],
    },

    contentForCarousel: {
      2017: [
        {
          title: 'PIXELATED 2017',
          content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
          img: testImg,
        },
        {
          title: 'PIXELATED 2017',
          content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
          img: testImg,
        },
        {
          title: 'PIXELATED 2017',
          content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
          img: testImg,
        },
        {
          title: 'PIXELATED 2017',
          content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
          img: testImg,
        },
      ],
      2018: [
        {
          title: 'PIXELATED 2018',
          content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
          img: testImg,
        },
        {
          title: 'PIXELATED 2018',
          content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
          img: testImg,
        },
        {
          title: 'PIXELATED 2018',
          content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
          img: testImg,
        },
        {
          title: 'PIXELATED 2018',
          content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
          img: testImg,
        },
      ],
      2021: [
        {
          title: 'PIXELATED 2021',
          content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
          img: testImg,
        },
        {
          title: 'PIXELATED 2021',
          content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
          img: testImg,
        },
        {
          title: 'PIXELATED 2021',
          content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
          img: testImg,
        },
        {
          title: 'PIXELATED 2021',
          content: 'We attempt too capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.',
          img: testImg,
        },
      ],
    },

    footer: {
      collegeAddress: "Dwarkadas J. Sanghvi College of Engineering, Vile Parle West, Mumbai 400056",
      email: "contact@ieeedjsce.com",
      secretaries: [
        { name: "Ambar Mehta", contact: "+91 96195 25418" },
        { name: "Naman Sanghvi", contact: "+91 99208 38055" },
      ],
    }

  };

  return (
    <Context.Provider value={[baseData]}>
      {props.children}
    </Context.Provider>
  )
}