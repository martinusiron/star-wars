import React, {Component} from 'react';
import {fetchData} from '../api/FetchData'

class Specie extends Component {
    constructor(props){
        super(props)
        this.state = {
            specie: []
        }
    }
    componentWillMount(){
        fetchData(this.props.value)
        .then(data => this.setState({
            specie : data
        }))
    }

    render(){
        const {specie} = this.state
        return(
            <div className="card" style={{padding:'20px',background:'ghostwhite'}}>
                <h6>Name : {specie.name}</h6>
                <h6>Classification : {specie.classification}</h6>
                <h6>Designation : {specie.designation}</h6>
                <h6>Hair Color : {specie.hair_color}</h6>
                <h6>Skin Color : {specie.skin_color}</h6>
                <h6>Eye Color : {specie.eye_color}</h6>
                <h6>Average Height : {specie.average_height}</h6>
                <h6>Average Lifespan : {specie.average_lifespan}</h6>
                <h6>Language : {specie.language}</h6>
            </div>
        )
    }
}

export default Specie