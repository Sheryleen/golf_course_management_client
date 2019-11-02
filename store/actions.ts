import * as constants from "./constants";
import {
  Customer,
  FetchAllCustomersPendingAction,
  FetchAllCustomersSuccessAction,
  FetchAllCustomersFailedAction,
  FetchOneCustomerFailedAction,
  FetchOneCustomerPendingAcgtion,
  FetchOneCustomerSuccessAction,
  AddCustomerSuccessAction,
  AddCustomerFailedAction,
  AddCustomerPendingAction
} from "./types";
import { any } from "../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types";

export const fetchAllCustomersPending = (): FetchAllCustomersPendingAction => ({
    type: constants.FETCH_ALL_CUSTOMERS_PENDING
})
export const fetchAllCustomersSuccess = (
    customers: Customer[]
): FetchAllCustomersSuccessAction => ({
        type: constants.FETCH_ALL_CUSTOMERS_SUCCESS,
    payload: customers
    })
export const fetchAllCustomersFailed = (
    err: any
): FetchAllCustomersFailedAction => ({
        type: constants.FETCH_ALL_CUSTOMERS_FAILED,
        payload: err 
    })
export const addOneCustomerPending = (): AddCustomerPendingAction => ({
    type: constants.ADD_CUSTOMER_PENDING
})
export const addCustomerSuccess = (
      customers: Customer
): AddCustomerSuccessAction => ({
        type: constants.ADD_CUSTOMER_SUCCESS,
        payload: customers
    }) 
export const addCustomerFailed = (err: any): AddCustomerFailedAction => ({
    type: constants.ADD_CUSTOMER_FAILED,
    payload: err 
  })   
    
