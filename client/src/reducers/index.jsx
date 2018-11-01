import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import sign_up from "./reducer_sign_up"
import get_started from "./reducer_get_started"
import follow from "./reducer_follow"

const rootReducer = combineReducers({
  sign_up: sign_up,
  get_started: get_started,
  follow: follow
})

export default rootReducer
