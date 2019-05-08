import React, {Component} from 'react'
import {fetchPlanets} from '../api/FetchData'
class Planets extends Component {
    constructor(props){
        super(props)
        this.state = {
            planet : []
        }
    }

    componentDidMount(){
        fetchPlanets(this.props.value)
        .then((data => this.setState({
            planet : data
        })))
    }
    render(){
        return(
            <h6>{this.state.planet.name}</h6>
        )
    }
}

export default Planets