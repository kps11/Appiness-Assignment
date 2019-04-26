import {combineReducers} from 'redux'
import authReducer from './authReducer'
import employeeListReducer from './employeeListReducer'
import errorReducers from './errorReducers'
export default combineReducers({
    auth:authReducer,
    employeeList:employeeListReducer,
    errors:errorReducers
})