import React, {Component} from 'react'
import {fetchCharacters} from '../api/FetchData'
class Characters extends Component {
    constructor(props){
        super(props)
        this.state = {
            character : [],
            isHidden: false
        }
        this.toggleHidden = this.toggleHidden.bind(this)
    }
    toggleHidden() {
        this.state.isHidden= false
        this.setState({
            isHidden : true
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