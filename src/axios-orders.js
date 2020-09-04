import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5cdc8.firebaseio.com/'
})

export default instance;