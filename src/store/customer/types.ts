import {
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_PENDING,
  ADD_CUSTOMER_FAILED,
  FETCH_ALL_CUSTOMERS_SUCCESS,
  FETCH_ALL_CUSTOMERS_PENDING,
  FETCH_ALL_CUSTOMERS_FAILED,
  FETCH_ONE_CUSTOMER_PENDING,
  FETCH_ONE_CUSTOMER_SUCCESS,
  FETCH_ONE_CUSTOMER_FAILED,
  UPDATE_CUSTOMER_PENDING,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILED,
  REMOVE_CUSTOMER_PENDING,
  REMOVE_CUSTOMER_SUCCESS,
  REMOVE_CUSTOMER_FAILED
} from "./constants";

export interface Customer {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  created_at: string;
  updated_at: string;
}

//defines initialState type as CustomerState
//define what customer state will look like
//will have all customers inside of array
//err defined as object

export interface CustomerState {
  all: any;
  err: any;
}
//Add Customer's actions
export interface AddCustomerPendingAction {
  type: typeof ADD_CUSTOMER_PENDING;
}
export interface AddCustomerSuccessAction {
  type: typeof ADD_CUSTOMER_SUCCESS;
  payload: Customer;
}
export interface AddCustomerFailedAction {
  type: typeof ADD_CUSTOMER_FAILED;
  payload: any;
}
//FETCH ALL CUSTOMERS ACTIONS
export interface FetchAllCustomersPendingAction {
  type: typeof FETCH_ALL_CUSTOMERS_PENDING;
}
export interface FetchAllCustomersSuccessAction {
  type: typeof FETCH_ALL_CUSTOMERS_SUCCESS;
  payload: Customer[];
}
export interface FetchAllCustomersFailedAction {
  type: typeof FETCH_ALL_CUSTOMERS_FAILED;
  payload: Customer[];
}
//fetch one customer actions
export interface FetchOneCustomerPendingAction {
  type: typeof FETCH_ONE_CUSTOMER_PENDING;
}

export interface FetchOneCustomerSuccessAction {
  type: typeof FETCH_ONE_CUSTOMER_SUCCESS;
  payload: Customer;
}
export interface FetchOneCustomerFailedAction {
  type: typeof FETCH_ONE_CUSTOMER_FAILED;
  payload: any;
}
//update customer actions
export interface UpdateCustomerPendingAction {
  type: typeof UPDATE_CUSTOMER_PENDING;
}
export interface UpdateCustomerSuccessAction {
  type: typeof UPDATE_CUSTOMER_SUCCESS;
  payload: Customer;
}
export interface UpdateCustomerFailedAction {
  type: typeof UPDATE_CUSTOMER_FAILED;
  payload: any;
}
//remove customer actions
export interface RemoveCustomerPendingAction {
  type: typeof REMOVE_CUSTOMER_PENDING;
}
export interface RemoveCustomerSuccessAction {
  type: typeof REMOVE_CUSTOMER_SUCCESS;
  payload: Customer;
}
export interface RemoveCustomerFailedAction {
  type: typeof REMOVE_CUSTOMER_FAILED;
  payload: any;
}
//Group the different types of actions
type AddCustomerType =
  | AddCustomerPendingAction
  | AddCustomerSuccessAction
  | AddCustomerFailedAction;
type FetchAllCustomersType =
  | FetchAllCustomersPendingAction
  | FetchAllCustomersSuccessAction
  | FetchAllCustomersFailedAction;
type FetchOneCustomerType =
  | FetchOneCustomerPendingAction
  | FetchOneCustomerSuccessAction
  | FetchOneCustomerFailedAction;
type UpdateCustomerType =
  | UpdateCustomerPendingAction
  | UpdateCustomerSuccessAction
  | UpdateCustomerFailedAction;
type RemoveCustomerType =
  | RemoveCustomerPendingAction
  | RemoveCustomerSuccessAction
  | RemoveCustomerFailedAction;

//import all-inclusive type
export type CustomerActionType =
  | AddCustomerType
  | FetchAllCustomersType
  | FetchOneCustomerType
  | UpdateCustomerType
  | RemoveCustomerType;
