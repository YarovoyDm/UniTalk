import axios from 'axios';

const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export default axios.create({
    baseURL: `https://${API_TOKEN}.mockapi.io/api`
})
