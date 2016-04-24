import fetch from 'isomorphic-fetch'
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

export function fetchData(initalState) {
  return dispatch => {
    fetch(`http://localhost:3000/data/${initialState}.json`)
      .then(res => res.json())
      .then(json => dispatch(addCard(json)))
      .catch(err => console.error(err))
  }
}

