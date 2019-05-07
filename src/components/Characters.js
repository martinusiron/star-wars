import React, {Component} from 'react'
import {fetchCharacters} from '../api/FetchData'
class Characters extends Component {
    constructor(props){
        super(props)
        this.state = {
            character : [],
            isHidden: true
        }
        this.toggleHidden = this.toggleHidden.bind(this)
    }
    toggleHidden() {
        console.log(this.props)
        this.setState({
            isHidden : false
        })
    }
    componentDidMount(){
        fetchCharacters(this.props.value)
        .then((data => this.setState({
            character : data
        })))
    }
    render(){
        const {character, isHidden} = this.state;
        // console.log(isHidden)
        return(
            <div>
                <h6 onClick={this.toggleHidden} value={character.url}>{character.name}</h6>
                { isHidden ? <h6>{character.name}</h6> : null }
            </div>
        )
    }
}

export default Characters