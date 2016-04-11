import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import pic1 from '../public/imgs/01.jpg'
import pic2 from '../public/imgs/02.jpg'

const initialState = {

  cards: [
    {
      id: 0,

      cardHeader: {
        title: "第一个卡片",
        subtitle: "This is the first card",
        avatar: ""
      },

      media: {
        overlay: {
          title: "第一个卡片",
          subtitle: "This is the first card",
          image: <img src={pic1} />
        }
      },

      text: "inspired by the communtiy",

      action: <RaisedButton label="hello" primary={true} />
    },

    {
      id: 1,
      
      cardHeader: {
        title: "第二个卡片",
        subtitle: "This is the second card",
        avatar: ""
      },

      media: {
        overlay: {
          title: "第二个卡片",
          subtitle: "This is the second card",
          image: <img src={pic2} />
        }
      },

      text: "Second wave",

      action: null
    }
  ]

}

export default initialState