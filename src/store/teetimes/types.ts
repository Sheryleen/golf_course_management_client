import {
  ADD_TEETIME_SUCCESS,
  ADD_TEETIME_PENDING,
  ADD_TEETIME_FAILED,
  FETCH_ALL_TEETIMES_SUCCESS,
  FETCH_ALL_TEETIMES_PENDING,
  FETCH_ALL_TEETIMES_FAILED,
  FETCH_ONE_TEETIME_PENDING,
  FETCH_ONE_TEETIME_SUCCESS,
  FETCH_ONE_TEETIME_FAILED,
  UPDATE_TEETIME_PENDING,
  UPDATE_TEETIME_SUCCESS,
  UPDATE_TEETIME_FAILED,
  REMOVE_TEETIME_PENDING,
  REMOVE_TEETIME_SUCCESS,
  REMOVE_TEETIME_FAILED
} from "./constants";

export interface TeeTime {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  created_at: string;
  updated_at: string;
}
export interface TeeTimeState {
  teetime: TeeTime[];
}
//Add TeeTimes' actions
export interface AddTeeTimePendingAction {
  type: typeof ADD_TEETIME_PENDING;
}
export interface AddTeeTimeSuccessAction {
  type: typeof ADD_TEETIME_SUCCESS;
  payload: TeeTime;
}
export interface AddTeeTimeFailedAction {
  type: typeof ADD_TEETIME_FAILED;
  payload: any;
}
//FETCH ALL TEETIMES ACTIONS
export interface FetchAllTeeTimesPendingAction {
  type: typeof FETCH_ALL_TEETIMES_PENDING;
}
export interface FetchAllTeeTimesSuccessAction {
  type: typeof FETCH_ALL_TEETIMES_SUCCESS;
  payload: TeeTime[];
}
export interface FetchAllTeeTimesFailedAction {
  type: typeof FETCH_ALL_TEETIMES_FAILED;
  payload: TeeTime[];
}
//fetch one customer actions
export interface FetchOneTeeTimePendingAction {
  type: typeof FETCH_ONE_TEETIME_PENDING;
}

export interface FetchOneTeeTimeSuccessAction {
  type: typeof FETCH_ONE_TEETIME_SUCCESS;
  payload: TeeTime;
}
export interface FetchOneTeeTimeFailedAction {
  type: typeof FETCH_ONE_TEETIME_FAILED;
  payload: any;
}
//update teetime actions
export interface UpdateTeeTimePendingAction {
  type: typeof UPDATE_TEETIME_PENDING;
}
export interface UpdateTeeTimeSuccessAction {
  type: typeof UPDATE_TEETIME_SUCCESS;
  payload: TeeTime;
}
export interface UpdateTeeTimeFailedAction {
  type: typeof UPDATE_TEETIME_FAILED;
  payload: any;
}
//remove teetimes actions
export interface RemoveTeeTimePendingAction {
  type: typeof REMOVE_TEETIME_PENDING;
}
export interface RemoveTeeTimeSuccessAction {
  type: typeof REMOVE_TEETIME_SUCCESS;
  payload: TeeTime;
}
export interface RemoveTeeTimeFailedAction {
  type: typeof REMOVE_TEETIME_FAILED;
  payload: any;
}
//Group the different types of actions
type AddTeeTimeType =
  | AddTeeTimePendingAction
  | AddTeeTimeSuccessAction
  | AddTeeTimeFailedAction;
type FetchAllTeeTimesType =
  | FetchAllTeeTimesPendingAction
  | FetchAllTeeTimesSuccessAction
  | FetchAllTeeTimesFailedAction;
type FetchOneTeeTimeType =
  | FetchOneTeeTimePendingAction
  | FetchOneTeeTimeSuccessAction
  | FetchOneTeeTimeFailedAction;
type UpdateTeeTimeType =
  | UpdateTeeTimePendingAction
  | UpdateTeeTimeSuccessAction
  | UpdateTeeTimeFailedAction;
type RemoveTeeTimeType =
  | RemoveTeeTimePendingAction
  | RemoveTeeTimeSuccessAction
  | RemoveTeeTimeFailedAction;

//import all-inclusive type
export type TeeTimeActionType =
  | AddTeeTimeType
  | FetchAllTeeTimesType
  | FetchOneTeeTimeType
  | UpdateTeeTimeType
  | RemoveTeeTimeType;
