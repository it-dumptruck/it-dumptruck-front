import axios, { Axios } from "axios";

const client = axios.create({
    baseURL: 'https://f5ih972vs1.execute-api.ap-northeast-2.amazonaws.com'
});



export default client;