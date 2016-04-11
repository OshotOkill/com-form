import * as actionTypes from '../constants/actionTypes'

const { ADD_CARD, DELETE_CARD } = actionTypes

function addCard(cardConfigs) {
  return {
    type: ADD_CARD,
    cardConfigs
  }
}

function deleteCard(id) {
  return {
    type: DELETE_CARD,
    id
  }
}

export default { 
  addCard, 
  deleteCard 
}