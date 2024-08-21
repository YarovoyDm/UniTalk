import axios from '../axios'
import { OPERATORS_ENDPOINT } from '../constants'

export const getOperators = () => {
    return axios.get(OPERATORS_ENDPOINT)
}