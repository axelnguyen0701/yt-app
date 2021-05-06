import axios from 'axios';
const KEY = "AIzaSyCBGbdIUzait8TYRrtGU9jTy8Bbf04E9HE";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});

