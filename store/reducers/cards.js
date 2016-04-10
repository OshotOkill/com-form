import pic1 from '../../public/imgs/01.jpg'
import pic2 from '../../public/imgs/02.jpg'

const initState = [
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

function cards(state = initState, action) {
  const { id, cardsConfigs } = actions
  
  switch (action.type) {
    case ADD_NEWS :
      return [
        {
          header:{
            title: action.title,
            subtitle: action.subtitle,
            avatar: action.avatar
          },
          media:{
            overlay: {
              title: action.mediaTitle,
              subtitle: action.mediaSubTitle,
              children: action.mediaChildren
            }
          },
          text: action.text,
          action: action.component
        },
        ...state
      ]
      
    case DELETE_NEWS :
      return state.filter(card => {
        card.id !== id
      })
      
    default: 
      return state
  }
}

export default cards