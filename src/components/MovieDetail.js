import React, {Component} from 'react'
import { fetchMovieDetail } from '../api/FetchData';
import logo from '../assets/images/Star_Wars_Logo.png';
import Characters from './Characters';
import Planets from './Planets';
import Vehicles from './Vehicles';
import Starships from './Starships';
import Species from './Species'

class MovieDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            movieDetail : [],
            characters : [],
            planets : [],
            vehicles: [],
            starships: [],
            species : []
        }
    }
    componentDidMount(){
        const handle= this.props.match.params.id;
        fetchMovieDetail(handle)
        .then((data => this.setState({
            movieDetail: data,
            characters : data.characters,
            planets : data.planets,
            vehicles : data.vehicles,
            starships : data.starships,
            species: data.species
        })))
    }
    render(){
        
        return(
            <div className="container">
                <div className="row card" style={{marginTop: '40px'}}>
                    <div className="col-md-4">
                        <img src={logo} style={{width:'100%',marginBottom:'20px',marginTop:'20px'}} />
                    </div>
                    <div className="col-md-8">
                        <h3>{this.state.movieDetail.title} </h3>
                        <h5>Date Created : {this.state.movieDetail.release_date}</h5>
                        <h5>Director     : {this.state.movieDetail.director}</h5>
                        <h5>Producer     : {this.state.movieDetail.producer}</h5>
                        <h5>Opening Crawl: {this.state.movieDetail.opening_crawl}</h5>
                    </div>
                </div>
                <br />
                <div className="row card" style={{marginBottom: '40px'}}>
                    <div className="col-md-4">
                        <h4>Related Characters</h4>
                        <hr/>
                        { this.state.characters.map((character, index) => (
                            <Characters value={character} key={index} />
                        ))}
                    </div>
                    <div className="col-md-4">
                        <h4>Related Planets</h4>   
                        <hr/>
                        { this.state.planets.map((planet, index) => (
                            <Planets value={planet} key={index} />
                        ))}
                    </div>
                    <div className="col-md-4">
                        <h4>Related Vehicles</h4>   
                        <hr/>
                        { this.state.vehicles.map((vehicle, index) => (
                            <Vehicles value={vehicle} key={index} />
                        ))}
                    </div>
                    <div className="col-md-4">
                        <h4>Related Starships</h4>   
                        <hr/>
                        { this.state.starships.map((starship, index) => (
                            <Starships value={starship} key={index} />
                        ))}
                    </div>
                    <div className="col-md-4">
                        <h4>Related Species</h4>   
                        <hr/>
                        { this.state.species.map((specie, index) => (
                            <Species value={specie} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetail