export const exerciseOptions={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bf41d3fa89msh14c9486c0140f5ap17701cjsn7ef6ca9b70e9',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };
 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'bf41d3fa89msh14c9486c0140f5ap17701cjsn7ef6ca9b70e9'
     
    },
  };
  
export const fetchData = async (url, options)=>{
const response = await fetch(url, options);
const data = await response.json();
return data;
}