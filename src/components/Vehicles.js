import React, {Component} from 'react'
import {fetchData} from '../api/FetchData'
import Vehicle from './Vehicle';
class Vehicles extends Component {
    constructor(props){
        super(props)
        this.state = {
            vehicle : [],
            isHidden : false
        }
        this.toggleHidden = this.toggleHidden.bind(this)
    }
    toggleHidden() {
        this.setState(prevState => ({
            isHidden : !prevState.isHidden
        }))
    }
    componentDidMount(){
        fetchData(this.props.value)
        .then((data => this.setState({
            vehicle : data
        })))
    }
    render(){
        const {isHidden, vehicle} = this.state
        return(
            <div>
                <h6 onClick={this.toggleHidden} value={vehicle.url}><a href="#">{vehicle.name}</a></h6>
                { isHidden  && <Vehicle value={vehicle.url} /> }
            </div>
        )
    }
}

export default Vehicles