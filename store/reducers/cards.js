import * as actionTypes from '../../constants/actionTypes'

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
            title: cardConfigs.title,
            subtitle: cardConfigs.subtitle,
            avatar: cardConfigs.avatar
          },
          media: {
            overlay: {
              title: cardConfigs.mediaTitle,
              subtitle: cardConfigs.mediaSubTitle,
              children: cardConfigs.mediaChildren
            }
          },
          text: cardConfigs.text,
          action : cardConfigs.component
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