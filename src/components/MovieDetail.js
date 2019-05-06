import React, {Component} from 'react'
import { fetchMovieDetail } from '../api/FetchData';
import logo from '../assets/images/Star_Wars_Logo.png';

class MovieDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            movieDetail : []
        }
        this.items = 0
    }
    componentDidMount(){
        const handle= this.props.match.params.id;
        // console.log(this.props.location.data.url)
        fetchMovieDetail(handle)
        .then((data => this.setState({
            movieDetail: data
        })))
    }
    render(){
        const items =this.state.movieDetail.characters 
        console.log(items)
        // this.state.movieDetail.characters.map(item => (
        //     console.log(item)
        // ))
        return(
            <div className="container">
                <div className="row card" style={{marginTop: '40px'}}>
                <div className="col-md-4">
                        <img src={logo} style={{width:'100%'}} />
                    </div>
                    <div className="col-md-8">
                        <h3>{this.state.movieDetail.title} </h3>
                        <h5>Date Created : {this.state.movieDetail.release_date}</h5>
                        <h5>Director     : {this.state.movieDetail.director}</h5>
                        <h5>Producer     : {this.state.movieDetail.producer}</h5>
                        <h5>Opening Crawl: {this.state.movieDetail.opening_crawl}</h5>
                    </div>
                </div>
                <div className="row card">
                    <div className="col-md-4">
                        <h3>Related Characters</h3>
                        <hr/>
                        
                        {this.state.movieDetail.characters}
                        {/* { this.state.movieDetail.characters.map((character, index) => (
                            <h6>{character[index]}</h6>
                        ))} */}
                    </div>
                    <div className="col-md-4">
                        <h3>Related Planets</h3>   
                        <hr/>
                        {this.state.movieDetail.planets} 
                    </div>
                    <div className="col-md-4">
                        <h3>Related Vehicles</h3>   
                        <hr/>
                        {this.state.movieDetail.vehicles} 
                    </div>
                    <div className="col-md-4">
                        <h3>Related Starships</h3>   
                        <hr/>
                        {this.state.movieDetail.starships} 
                    </div>
                    <div className="col-md-4">
                        <h3>Related Species</h3>   
                        <hr/>
                        {this.state.movieDetail.species} 
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetail