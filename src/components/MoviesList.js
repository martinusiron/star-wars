import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesAll } from '../api/FetchData';
import logo from '../assets/images/Star_Wars_Logo.png';
import loading from '../assets/images/loading.gif';
class MoviesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            allMovies: [],
            isLoading: false
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
        let html;
        this.state.allMovies.sort(function(a,b){
            var eps_a = a.episode_id;
            var eps_b = b.episode_id;
            return (eps_a < eps_b) ? -1 : (eps_a > eps_b) ? 1 : 0;
        });
        if(this.state.isLoading){
            html = <img src={loading} className="loading" />
        } else{
            html = 
            <div className="row">
                { this.state.allMovies.map((movie, index) => (
                    <div className="col-md-3" 
                        key={movie.episode_id}
                    >
                        <div className="card-body">
                            <Link to={{pathname:"films/"+index}} style={{textDecorationLine: 'none'}}>
                                <div className="card">
                                    <img src={logo} alt="logo" style={{width:'100%'}} />
                                    <h5 className="card-subtitle mb-2 text-muted" style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding: '20px'}}>Episode {movie.episode_id} : {movie.title}</h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        }
        return(
            <div>{html}</div>
        )
    }
}
export default MoviesList