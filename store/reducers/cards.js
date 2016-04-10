import initialState from '../../data'

function cards(state = initialState, action) {
  const { id, cardsConfigs } = action

  switch (action.type) {
    case ADD_NEWS:
      return [
        {
          header: {
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

    case DELETE_NEWS:
      return state.filter(card => {
        card.id !== id
      })

    default:
      return state
  }
}

export default cards