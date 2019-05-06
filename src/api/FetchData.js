const URL = 'https://swapi.co/api/films/?format=json';

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
        episode_id: movie.episode_id
      }
    }))
    .catch((error)=>{
      console.log ("Error in fetchMoviesAll " + error);
    })
}

