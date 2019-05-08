import React, {Component} from 'react'
import {fetchData} from '../api/FetchData'
import Planet from './Planet';
class Planets extends Component {
    constructor(props){
        super(props)
        this.state = {
            planet : [],
            isHidden: false
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
            planet : data
        })))
    }
    render(){
        const {planet, isHidden} = this.state
        return(
            <div>
                <h6 onClick={this.toggleHidden} value={planet.url}><a href="#">{planet.name}</a></h6>
                { isHidden  && <Planet value={planet.url} /> }
            </div>
        )
    }
}

export default Planets