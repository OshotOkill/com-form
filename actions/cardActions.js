import fetch from 'isomorphic-fetch';
import { 
  ADD_CARD, 
  DELETE_CARD, 
  RECEIVE_DATA 
} from '../constants/actionTypes';

export const addCard = cardConfigs => ({
  type: ADD_CARD,
  cardConfigs
});

export const deleteCard = id => ({
  type: DELETE_CARD,
  id
});

export const receiveData = data => ({
  type: RECEIVE_DATA,
  data
});

export const fetchData = () => dispatch => (
  fetch('/data/initialState')
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Data fetching failed')
      }
      return res.json();
    })
    .then(data => dispatch(receiveData(data.cards)))
    .catch(err => console.error(err))
);

export const postData = cardConfigs => dispatch => (
   fetch('/data/initialState', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        cardConfigs
      })
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Connection failed');
          dispatch(addCard(cardConfigs));
        }
      })
      .catch(err => console.error(err))
);
