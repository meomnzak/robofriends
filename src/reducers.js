import {
  CHANGE_SEARCHFIELD,
  REQEST_ROBOTS_PENDING,
  REQEST_ROBOTS_SUCCESS,
  REQEST_ROBOTS_FAILED
} from './constants.js'


const initialStateSearch = {
  searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state , {searchField: action.payload})
    default:
      return state;
  }
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}

export const requestRobots = (state= initialStateRobots , action={}) => {
  switch(action.type) {
    case REQEST_ROBOTS_PENDING:
      return Object.assign({}, state , { isPending: true})
    case REQEST_ROBOTS_SUCCESS:
      return Object.assign({}, state , { robots: action.payload, isPending: false })
    case REQEST_ROBOTS_FAILED:
      return Object.assign({}, state , { error: action.payload, isPending: false })
    default:
      return state;
  }
}
