import fetch from 'isomorphic-fetch';
import { RECEIVE_GROUPS } from '../constants/actionTypes';


export function receiveGroups(groups) {
  return {
    type: RECEIVE_GROUPS,
    groups
  }
}

export function fetchGroups(groups) {
  return dispatch => {
    return fetch('/data/initialState/groups')
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Receive groups failed');
        }
        return res.json();
      })
      .then(groups => dispatch(receiveGroups(groups)))
      .catch(err => console.error(err));
  }
}

export function addGroup(group) {
  return dispatch => {
    fetch('/data/initialState/groups/addGroup', {
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
      .catch(err => console.error(err));
  }
}

export function addGroupAnnouncement(anno) {
  return dispatch => {
    fetch('/data/initialState/groups/addGroupAnnouncement', {
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
      .catch(err => console.error(err));
  }
}

export function addGroupSchedule(schedule) {
  return dispatch => {
    fetch('/data/initialState/groups/addGroupSchedule', {
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
      .catch(err => console.error(err));
  }
}
