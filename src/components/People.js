import React, {Component} from 'react';
import {fetchData} from '../api/FetchData'

class People extends Component {
    constructor(props){
        super(props)
        this.state = {
            people: []
        }
    }
    componentWillMount(){
        fetchData(this.props.value)
        .then(data => this.setState({
            people : data
        }))
    }

    render(){
        const {people} = this.state
        return(
            <div className="card" style={{padding:'20px',background:'ghostwhite'}}>
                <h6>Name : {people.name}</h6>
                <h6>Height : {people.height}</h6>
                <h6>Mass : {people.mass}</h6>
                <h6>Hair Color : {people.hair_color}</h6>
                <h6>Skin Color : {people.skin_color}</h6>
                <h6>Eye Color : {people.eye_color}</h6>
                <h6>Birth Year : {people.birth_year}</h6>
                <h6>Gender : {people.gender}</h6>
            </div>
        )
    }
}

export default People