import React, { createContext } from 'react'
import navLogoImg from "../images/IEEELogo.svg";
import testImg from "../images/homePageEventsCarousel.svg";
import upcomingEventPoster from "../images/gitup_homeEvents.png"

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