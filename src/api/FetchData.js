const URL = 'https://swapi.co/api/films/';

export function fetchMoviesAll(){
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.results)
    .then(results =>results.map(movie=> {
      return {
        title: movie.title,
  			release_date: movie.release_date,
  			director: movie.director,
        producer: movie.producer,
        episode_id: movie.episode_id,
        url: movie.url
      }
    }))
    .catch((error)=>{
      console.log ("Error in fetchMoviesAll " + error);
    })
}

export function fetchMovieDetail(id){
  return fetch(URL+id)
    .then(response => response.json())
    .then(data => data)
    .catch((error)=>{
      console.log ("Error in fetchMovieDetail " + error);
    })
}

export function fetchData(url){
  return fetch(url)
  .then(response => response.json())
  .then(data => data)
  .catch((error)=>{
    console.log ("Error in fetchData " + error);
  })
}