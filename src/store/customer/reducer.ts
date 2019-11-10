import * as types from './types'
import * as constants from './constants'

const initialState: any = {
    all: [],
    err: {}
};

export default (state = initialState, action:types.CustomerActionType) => {
    switch (action.type) {
        case constants.FETCH_ALL_CUSTOMERS_PENDING:
        case constants.ADD_CUSTOMER_PENDING:
        case constants.REMOVE_CUSTOMER_PENDING:
            return state;

        case constants.FETCH_ALL_CUSTOMERS_FAILED:
        case constants.ADD_CUSTOMER_FAILED:
        case constants.REMOVE_CUSTOMER_FAILED:
            return {
                ...state,
                err: action.payload
            };
        case constants.FETCH_ALL_CUSTOMERS_SUCCESS:
            return {
                ...state,
                all: action.payload
            };

        case constants.ADD_CUSTOMER_SUCCESS:
            return {
                ...state,
                all: [action.payload, ...state.all]
            };
        case constants.REMOVE_CUSTOMER_SUCCESS:
            return {
                ...state

                // all: state.all.filter(customer => customer === action.payload.id)
            };
        default:
            return state;
    }
};
