import * as constants from "./constants";
import * as types from "./types";

export const fetchAllCustomersPending = (): types.FetchAllCustomersPendingAction => ({
  type: constants.FETCH_ALL_CUSTOMERS_PENDING
});
export const fetchAllCustomersSuccess = (
  customers: types.Customer[]
): types.FetchAllCustomersSuccessAction => ({
  type: constants.FETCH_ALL_CUSTOMERS_SUCCESS,
  payload: customers
});
export const fetchAllCustomersFailed = (
  err: any
): types.FetchAllCustomersFailedAction => ({
  type: constants.FETCH_ALL_CUSTOMERS_FAILED,
  payload: err
});
export const addOneCustomerPending = (): types.AddCustomerPendingAction => ({
  type: constants.ADD_CUSTOMER_PENDING
});
export const addCustomerSuccess = (
  customers: types.Customer
): types.AddCustomerSuccessAction => ({
  type: constants.ADD_CUSTOMER_SUCCESS,
  payload: customers
});
export const addCustomerFailed = (err: any): types.AddCustomerFailedAction => ({
  type: constants.ADD_CUSTOMER_FAILED,
  payload: err
});
