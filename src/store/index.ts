import { createStore, combineReducers, applyMiddleware } from "redux";
import customersReducer from "./customer/reducer";
import teeTimesReducer from './teetimes/reducer';

import thunk from "redux-thunk";
import logger from "redux-logger";

//creat a property of the store state called customer
//brings in an array of customer
//combines both customer and teetimes
const rootReducer = combineReducers({
    customers: customersReducer,
    teetimes: teeTimesReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
