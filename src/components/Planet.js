import React, {Component} from 'react';
import {fetchData} from '../api/FetchData'

class Planet extends Component {
    constructor(props){
        super(props)
        this.state = {
            planet: []
        }
    }
    componentWillMount(){
        fetchData(this.props.value)
        .then(data => this.setState({
            planet : data
        }))
    }

    render(){
        const {planet} = this.state
        return(
            <div className="card" style={{padding:'20px',background:'ghostwhite'}}>
                <h6>Name : {planet.name}</h6>
                <h6>Rotation Period : {planet.rotation_period}</h6>
                <h6>Orbital Period : {planet.orbital_period}</h6>
                <h6>Diameter : {planet.diameter}</h6>
                <h6>Climate : {planet.climate}</h6>
                <h6>Gravity : {planet.gravity}</h6>
                <h6>Terrain : {planet.terrain}</h6>
                <h6>Population : {planet.population}</h6>
            </div>
        )
    }
}

export default Planet