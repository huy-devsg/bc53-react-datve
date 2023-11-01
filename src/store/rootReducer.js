import { combineReducers } from 'redux'
import { btMovieBookingReducer } from './BTMovieBooking/slice'

export const rootReducer = combineReducers({
  btMovieBooking: btMovieBookingReducer,
})
