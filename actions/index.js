import * as actionTypes from '../constants/actionTypes'

const { ADD_CARD, DELETE_CARD } = actionTypes

export function addCard(cardConfigs) {
  return {
    type: ADD_CARD,
    cardConfigs
  }
}

export function deleteCard(id) {
  return {
    type: DELETE_CARD,
    id
  }
}
