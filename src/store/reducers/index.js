import { combineReducers } from 'redux'
import cocktailReducer from './cocktailReducers'

export default combineReducers({
  cocktails: cocktailReducer
})