import * as actionTypes from '../../constants/actionTypes';

const { ADD_CARD, DELETE_CARD, RECEIVE_DATA } = actionTypes;

function cards(state = [], action) {
  const { id, cardConfigs, data } = action;

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
              title: cardConfigs.cardMedia.overlay.title,
              subtitle: cardConfigs.cardMedia.overlay.subtitle,
              imageURL: cardConfigs.cardMedia.overlay.imageURL
            }
          },
          
          cardText: cardConfigs.cardText,
         
          cardAction : cardConfigs.cardAction
        }
      ]

    case DELETE_CARD:
      return state.filter(card => 
        card.id !== id
      )

    case RECEIVE_DATA:
      return data
      
    default:
      return state
  }
}

export default cards;