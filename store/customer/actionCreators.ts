import axios from "axios"
import {
    fetchAllCustomersPending,
    fetchAllCustomersSuccess,
    fetchAllCustomersFailed,
} from './actions'
import { Dispatch } from 'redux'

export const fetchAllCustomers = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get (`http://localhost:8000/customers`)
        dispatch(fetchAllCustomersSuccess(response.data))
    } catch (err) {
        dispatchEvent(fetchAllCustomersFailed(err))
    }
}

