import React, {Component} from 'react';
import {fetchData} from '../api/FetchData'

class starship extends Component {
    constructor(props){
        super(props)
        this.state = {
            starship: []
        }
    }
    componentWillMount(){
        fetchData(this.props.value)
        .then(data => this.setState({
            starship : data
        }))
    }

    render(){
        const {starship} = this.state
        return(
            <div className="card" style={{padding:'20px',background:'ghostwhite'}}>
                <h6>Name : {starship.name}</h6>
                <h6>Model : {starship.model}</h6>
                <h6>Manufacturer : {starship.manufacturer}</h6>
                <h6>Starship Class : {starship.starship_class}</h6>
                <h6>Consumables : {starship.consumables}</h6>
                <h6>Cargo Capacity : {starship.cargo_capacity}</h6>
                <h6>Passengers : {starship.passengers}</h6>
                <h6>Crew : {starship.crew}</h6>
                <h6>Cost in Credits : {starship.cost_in_credits}</h6>
            </div>
        )
    }
}

export default starship