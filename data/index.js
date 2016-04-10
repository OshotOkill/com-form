import pic1 from '../public/imgs/01.jpg'
import pic2 from '../public/imgs/02.jpg'

const initialState = [
  {
    content: [
      {
        id: 0,

        header: {
          title: "第一个卡片",
          subtitle: "This is the first card",
          avatar: ""
        },

        media: {
          overlay: {
            title: "第一个卡片",
            subtitle: "This is the first card",
            children: <img src={pic1} />
          }
        },

        text: "inspired by the communtiy",

        action: <RaisedButton label="hello" primary={true} />
      },

      {
        header: {
          title: "第二个卡片",
          subtitle: "This is the second card",
          avatar: ""
        },

        media: {
          overlay: {
            title: "第二个卡片",
            subtitle: "This is the second card",
            children: <img src={pic2} />
          }
        },

        text: {

        },

        action: {

        }
      }
    ]
  }
]

export default initalState