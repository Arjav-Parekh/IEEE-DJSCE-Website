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

export const Context = createContext();

export const DataProvider = (props) => {
  const baseData = {
    name: "IEEE",
    navLogo: navLogoImg,    

    home: {
      upcomingEvent:{
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

  };

  return (
    <Context.Provider value={[baseData]}>
      {props.children}
    </Context.Provider>
  )
}