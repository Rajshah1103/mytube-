import axios from 'axios';

const options = {
  
  url:'https://youtube-v31.p.rapidapi.com/search',
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'cfd77bd230mshaad1ae9c194a886p1426e9jsndb83add6a95e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async(url)=>{
   const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/${url}`,options)
   return data;
}