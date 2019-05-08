import React, {Component} from 'react'
import {fetchData} from '../api/FetchData'
import Specie from './Specie';
class Species extends Component {
    constructor(props){
        super(props)
        this.state = {
            specie : [],
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
            specie : data
        })))
    }
    render(){
        const {isHidden, specie} = this.state
        return(
            <div>
                <h6 onClick={this.toggleHidden} value={specie.url}><a href="#">{specie.name}</a></h6>
                { isHidden  && <Specie value={specie.url} /> }
            </div>
        )
    }
}

export default Species