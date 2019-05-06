import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { fetchMoviesAll } from '../api/FetchData'
import logo from '../assets/images/Star_Wars_Logo.png';
class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            allMovies: [],
            isLoading: true
        }
    }
    componentDidMount(){
        this.setState({ isLoading: true });
        fetchMoviesAll()
        .then((data => this.setState({
            allMovies : data,
            isLoading : false
        })))
    }
    render(){
        return(
            <div className="row">
                    { this.state.allMovies.map((movie, index) => (
                        <div className="col-md-3" 
                            key={movie.episode_id}
                        >
                            <div className="card-body">
                                <Link to={{pathname:"/"+index, data:movie}} style={{textDecorationLine: 'none'}}>
                                    <div className="card">
                                        <img src={logo} alt="logo" style={{width:'100%'}} />
                                        <h5 className="card-subtitle mb-2 text-muted" style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding: '20px'}}>Episode {movie.episode_id} : {movie.title}</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                
            </div>
        )
    }
}
export default MoviesList