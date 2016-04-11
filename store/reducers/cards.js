import actionTypes from '../../constants/actionTypes'

function cards(state = [], action) {
  const { id, cardsConfigs } = action
  const { ADD_CARD, DELETE_CARD } = actionTypes

  switch (action.type) {
    case ADD_CARD:
      return [
        {
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
        },
        ...state
      ]

    case DELETE_CARD:
      return state.filter(card => {
        card.id !== id
      })

    default:
      return state
  }
}

export default cards