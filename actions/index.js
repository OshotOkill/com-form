import * as actionTypes from '../constants/actionTypes'

const { ADD_TODO, DELETE_TODO } = actionTypes

function addCard(cardConfigs) {
  return {
    type: ADD_TODO,
    cardConfigs
  }
}

function deleteCard(id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export { addCard, deleteCard }