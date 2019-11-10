import * as constants from "./constants";
import * as types from "./types";

export const fetchAllTeeTimesPending = (): types.FetchAllTeeTimesPendingAction => ({
  type: constants.FETCH_ALL_TEETIMES_PENDING
});
export const fetchAllTeeTimesSuccess = (
  teetimes: types.TeeTime[]
): types.FetchAllTeeTimesSuccessAction => ({
  type: constants.FETCH_ALL_TEETIMES_SUCCESS,
  payload: teetimes
});
export const fetchAllTeeTimesFailed = (
  err: any
): types.FetchAllTeeTimesFailedAction => ({
  type: constants.FETCH_ALL_TEETIMES_FAILED,
  payload: err
});
export const addOneTeeTimePending = (): types.AddTeeTimePendingAction => ({
  type: constants.ADD_TEETIME_PENDING
});
export const addTeeTimeSuccess = (
  teetimes: types.TeeTime
): types.AddTeeTimeSuccessAction => ({
  type: constants.ADD_TEETIME_SUCCESS,
  payload: teetimes
});
export const addTeeTimeFailed = (err: any): types.AddTeeTimeFailedAction => ({
  type: constants.ADD_TEETIME_FAILED,
  payload: err
});
