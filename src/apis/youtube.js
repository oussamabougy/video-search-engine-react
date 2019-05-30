import axios from 'axios';

const API_KEY = "//Put the youtube api key here";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
});