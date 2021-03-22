import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super()
        this.state = {
            friends: [
                {
                    name: 'Jordan Mulfor',
                    age: 32,
                    interest: 'Basketball'
                },
                {
                    name: 'Erica Olson',
                    relationship: 'Girlfriend',
                    age: 23
                },
                {
                    name: 'Wyatt Wiest',
                    relationship: 'long-time buddy'
                },
                {
                    name: 'Zippy Draper',
                    age: 23,
                    hairColor: "brown"
                }
            ],
            userInput: '',
            filteredFriends: []
        }
    }
    handleChange(value){
        this.setState({userInput: value})
    }
    handleClick(prop){
        let friends = this.state.friends
        let rightFriends = []

        for(let i=0; i<friends.length; i++){
            if(friends[i].hasOwnProperty(prop)){
                rightFriends.push(friends[i])
            }
        }
        this.setState({filteredFriends: rightFriends})
    }


    render(){
        return(
            <div className='puzzleBox fliterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Orignial: {JSON.stringify(this.state.friends, null,10)}</span>
                <input className='inputLine' onChange={(element) => this.handleChange(element.target.value)}/>
                <button className='confirmationButton' onClick={()=> this.handleClick(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredFriends, null, 10)}</span>
                
            </div>

        )
    }
}
export default FilterObject