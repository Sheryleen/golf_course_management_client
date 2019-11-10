import * as types from './types'
import * as constants from './constants'

const initialState: any = {
  all: [],
  err: {}
};

export default (state = initialState, action: types.TeeTimeActionType) => {
  switch (action.type) {
    case constants.FETCH_ALL_TEETIMES_PENDING:
    case constants.ADD_TEETIME_PENDING:
    case constants.REMOVE_TEETIME_PENDING:
      return state;

    case constants.FETCH_ALL_TEETIMES_FAILED:
    case constants.ADD_TEETIME_FAILED:
    case constants.REMOVE_TEETIME_FAILED:
      return {
        ...state,
        err: action.payload
      };
    case constants.FETCH_ALL_TEETIMES_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case constants.ADD_TEETIME_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };
    case constants.REMOVE_TEETIME_SUCCESS:
      return {
        ...state
      };
    default:
      return state;
  }
};
