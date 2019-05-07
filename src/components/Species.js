import React, {Component} from 'react'
import {fetchSpecies} from '../api/FetchData'
class Species extends Component {
    constructor(props){
        super(props)
        this.state = {
            specie : []
        }
    }

    componentDidMount(){
        fetchSpecies(this.props.value)
        .then((data => this.setState({
            specie : data
        })))
    }
    render(){
        return(
            <h6>{this.state.specie.name}</h6>
        )
    }
}

export default Species