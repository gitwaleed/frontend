import { applyMiddleware, combineReducers} from  "redux";
import { userReducer } from "../reducers/user";
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
    user: userReducer
})
const store = configureStore({
    reducer,
    middleware: [thunk],
  })
export default store;





