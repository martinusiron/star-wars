import React, {Component} from 'react'
import {fetchStarships} from '../api/FetchData'

class Starships extends Component {
    constructor(props){
        super(props)
        this.state = {
            starship : []
        }
    }

    componentDidMount(){
        fetchStarships(this.props.value)
        .then((data => this.setState({
            starship : data
        })))
    }
    render(){
        return(
            <h6>{this.state.starship.name}</h6>
        )
    }
}

export default Starships