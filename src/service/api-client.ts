import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '9b35aafbb97541eb9a8e9d84d032ad8a'
    }
})