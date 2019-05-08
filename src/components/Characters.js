import React, {Component} from 'react'
import {fetchData} from '../api/FetchData'
import People from './People'
class Characters extends Component {
    constructor(props){
        super(props)
        this.state = {
            character : [],
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
            character : data
        })))
    }
    render(){
        const {character, isHidden} = this.state;
        return(
            <div>
                <h6 onClick={this.toggleHidden} value={character.url}><a href="#">{character.name}</a></h6>
                { isHidden  && <People value={character.url} /> }
            </div>
        )
    }
}
export default Characters