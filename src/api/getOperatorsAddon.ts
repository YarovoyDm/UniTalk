import axios from '../axios'
import { OPERATORS_ADDON_ENDPOINT } from '../constants'

export const getOperatorsAddon = () => {
    return axios.get(OPERATORS_ADDON_ENDPOINT)
}