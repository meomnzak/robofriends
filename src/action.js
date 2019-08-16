import {
  CHANGE_SEARCHFIELD,
  REQEST_ROBOTS_PENDING,
  REQEST_ROBOTS_SUCCESS,
  REQEST_ROBOTS_FAILED
} from './constants.js'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD ,
  payload: text
})

export const requestRobots = () => (dispatch) => {
  dispatch( {type: REQEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data=> dispatch({ type:REQEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error=> dispatch({ type: REQEST_ROBOTS_FAILED, payload: error }))
}
