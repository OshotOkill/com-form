import * as actionTypes from '../../constants/actionTypes'
import pic1 from '../../public/imgs/01.jpg'

const { ADD_CARD, DELETE_CARD } = actionTypes

function cards(state = [], action) {
  const { id, cardConfigs } = action

  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        
        {
          id: state.reduce((prev, cur) => Math.max(prev, cur.id), -1) + 1,
          
          cardHeader: {
            title: cardConfigs.cardHeader.title,
            subtitle: cardConfigs.cardHeader.subtitle,
            avatar: cardConfigs.cardHeader.avatar
          },
          
          cardMedia: {
            overlay: {
              title: cardConfigs.overlay.title,
              subtitle: cardConfigs.overlay.subtitle,
              image: cardConfigs.overlay.image
            }
          },
          
          cardText: cardConfigs.text,
          
          cardAction : cardConfigs.cardAction
        }
      ]

    case DELETE_CARD:
      return state.filter(card => 
        card.id !== id
      )

    default:
      return state
  }
}

export default cards