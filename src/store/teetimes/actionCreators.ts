import axios from "axios";
import {
    fetchAllTeeTimesPending,
    fetchAllTeeTimesSuccess,
    fetchAllTeeTimesFailed
} from "./actions";
import { Dispatch } from "redux";

export const fetchAllTeeTimes = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(fetchAllTeeTimesPending());
            const response = await axios.get(`http://localhost:8000/customers`);
            dispatch(fetchAllTeeTimesSuccess(response.data));
        } catch (err) {
            dispatch(fetchAllTeeTimesFailed(err));
        }
    };
};
