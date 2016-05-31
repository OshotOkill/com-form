import fetch from 'isomorphic-fetch';
import { RECEIVE_USER_INFO } from '../constants/actionTypes';


export function receiveUserInfo(user) {
  return {
    type: RECEIVE_USER_INFO,
    user
  }
}

export function fetchUserInfo(user) {
  return dispatch => {
    return fetch('/data/initialState/users')
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Receive user failed');
        }
        return res.json();
      })
      .then(user => dispatch(receiveUserInfo(user)))
      .catch(err => console.error(err));
  }
}

export function changeUserInfo(user) {
  return dispatch => {
    fetch('/data/initialState/users/changeInfo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user
      })
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Connection failed');
        }
        return res.json();
      })
      .then(user => dispatch(receiveUserInfo(user)))
      .catch(err => console.error(err));
  }
}

export function addUserSubscribe(subscribe) {
  return dispatch => {
    fetch('/data/initialState/users/addUserSubscribe', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subscribe
      })
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Connection failed');
        }
        return res.json();
      })
      .then(user => dispatch(receiveUserInfo(user)))
      .catch(err => console.error(err));    
  }
}

export function addUserSchedule(schedule) {
  return dispatch => {
    fetch('/data/initialState/users/addUserSchedule', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        schedule
      })
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Connection failed');
        }
        return res.json();
      })
      .then(user => dispatch(receiveUserInfo(user)))
      .catch(err => console.error(err));    
  }
}
