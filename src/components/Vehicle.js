import React, {Component} from 'react';
import {fetchData} from '../api/FetchData'

class Vehicle extends Component {
    constructor(props){
        super(props)
        this.state = {
            vehicle: []
        }
    }
    componentWillMount(){
        fetchData(this.props.value)
        .then(data => this.setState({
            vehicle : data
        }))
    }

    render(){
        const {vehicle} = this.state
        return(
            <div className="card" style={{padding:'20px',background:'ghostwhite'}}>
                <h6>Name : {vehicle.name}</h6>
                <h6>Model : {vehicle.model}</h6>
                <h6>Manufacturer : {vehicle.manufacturer}</h6>
                <h6>Vehicle Class : {vehicle.vehicle_class}</h6>
                <h6>Consumables : {vehicle.consumables}</h6>
                <h6>Cargo Capacity : {vehicle.cargo_capacity}</h6>
                <h6>Passengers : {vehicle.passengers}</h6>
                <h6>Crew : {vehicle.crew}</h6>
                <h6>Cost in Credits : {vehicle.cost_in_credits}</h6>
            </div>
        )
    }
}

export default Vehicle