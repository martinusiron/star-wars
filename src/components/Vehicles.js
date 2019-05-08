import React, {Component} from 'react'
import {fetchVehicles} from '../api/FetchData'
class Vehicles extends Component {
    constructor(props){
        super(props)
        this.state = {
            vehicle : []
        }
        this.id = 1;
    }

    componentDidMount(){
        fetchVehicles(this.props.value)
        .then((data => this.setState({
            vehicle : data
        })))
    }
    render(){
        return(
            <h6>{this.state.vehicle.name}</h6>
        )
    }
}

export default Vehicles