import React, {Component} from 'react'
import {fetchData} from '../api/FetchData'
import Starship from './Starship'
class Starships extends Component {
    constructor(props){
        super(props)
        this.state = {
            starship : [],
            isHidden : false
        }
        this.toggleHidden = this.toggleHidden.bind(this)
    }
    toggleHidden(e) {
        e.preventDefault();
        const {isHidden} = this.state;
        this.setState({
            isHidden : !isHidden
        })
    }
    componentDidMount(){
        fetchData(this.props.value)
        .then((data => this.setState({
            starship : data
        })))
    }
    render(){
        const {isHidden, starship} = this.state
        return(
            <div>
                <h6 onClick={this.toggleHidden} value={starship.url}><a href="#">{starship.name}</a></h6>
                { isHidden  && <Starship value={starship.url} /> }
            </div>
        )
    }
}

export default Starships