import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleChange(value){
        this.setState({userInput: value})
    }
    handleClick(userInput){
        let forward = userInput
        let reversed = userInput
        reversed = reversed.split('')
        reversed = reversed.reverse()
        reversed = reversed.join('')
        if(forward === reversed){
            this.setState({palindrome: 'true'})
        }else{
            this.setState({palindrome: 'false'})
        }
    }


    render(){
        console.log(this.state.palindrome)
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(element)=> this.handleChange(element.target.value)}/>
                <button className='confirmationButton' onClick={()=>this.handleClick(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>

            </div>
        )
    }
}
export default Palindrome