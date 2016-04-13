import * as actionTypes from '../../constants/actionTypes'

const { ADD_CARD, DELETE_CARD } = actionTypes

function cards(state = [], action) {
  const { id, cardsConfigs } = action

  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        
        {
          id: state.reduce((prev, cur) => Math.max(prev, cur.id), -1) + 1,
          
          cardHeader: {
            title: cardsConfigs.title,
            subtitle: cardsConfigs.subtitle,
            avatar: cardsConfigs.avatar
          },
          media: {
            overlay: {
              title: cardsConfigs.mediaTitle,
              subtitle: cardsConfigs.mediaSubTitle,
              children: cardsConfigs.mediaChildren
            }
          },
          text: cardsConfigs.text,
          action : cardsConfigs.component
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