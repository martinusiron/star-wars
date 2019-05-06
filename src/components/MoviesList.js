import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
import { fetchMoviesAll } from '../api/FetchData'
class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            allMovies: [],
            isLoading: true
        }
    }
    componentDidMount(){
        return fetchMoviesAll()
        .then((data => this.setState({
            allMovies : data
        })
        ))
    }
    render(){
        return(
            <div className="col-xs-12">
                    { this.state.allMovies.map((movie) => (
                        <div className="card" 
                            key={movie.episode_id}
                        >
                            <div className="card-body">
                                <h5 className="card-title">{movie.episode_id}</h5>
                                {/* <Link to={{pathname:"/"+movie.episode_id, data:movie}}> */}
                                    <h6 className="card-subtitle mb-2 text-muted">{movie.title}</h6>
                                {/* </Link> */}
                            </div>
                        </div>
                    ))}
                
            </div>
        )
    }
}
export default MoviesList