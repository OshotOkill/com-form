import fetch from 'isomorphic-fetch';
import { RECEIVE_GROUPS } from '../constants/actionTypes';

export const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

export const fetchGroups = groups => dispatch => (
  fetch('/api/fetchGroups')
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Receive groups failed');
      }
      return res.json();
    })
    .then(groups => dispatch(receiveGroups(groups)))
    .catch(err => console.error(err))
);

export const addGroup = group => dispatch => (
  fetch('/api/addGroup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      group
    })
  })
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Connection failed');
      }
      return res.json();
    })
    .then(groups => dispatch(receiveGroups(groups)))
    .catch(err => console.error(err))
);

export const addGroupAnnouncement = anno => dispatch => (
  fetch('/api/addGroupAnnouncement', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      anno
    })
  })
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Connection failed');
      }
      return res.json();
    })
    .then(groups => dispatch(receiveGroups(groups)))
    .catch(err => console.error(err))
);

export const addGroupSchedule = schedule => dispatch => (
  fetch('/api/addGroupSchedule', {
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
    .then(groups => dispatch(receiveGroups(groups)))
    .catch(err => console.error(err))
);
