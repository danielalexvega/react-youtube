import axios from 'axios';

const KEY = 'AIzaSyDNwVYR39VhH_Azb706OHj7OhniTSOBQDY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY,
    }
});