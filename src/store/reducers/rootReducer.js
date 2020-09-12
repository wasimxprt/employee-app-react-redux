import employeeReducer from './employeeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    employee: employeeReducer
})

export default rootReducer;