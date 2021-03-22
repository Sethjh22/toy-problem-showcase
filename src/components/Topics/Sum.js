import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleFirstInput(value){
        this.setState({number1: value})
    }
    handleSecondInput(value){
        this.setState({number2: value})
    }
    total(num1, num2){
        this.setState({sum: num1 + num2})
    }


    render(){
        // console.log(number1)
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' type='number' onChange={(element)=> this.handleFirstInput(element.target.value)}/>
                <input className='inputLine' type='number' onChange={(element)=> this.handleSecondInput(element.target.value)}/>
                <button className='confirmationButton' onChange={()=>this.total(this.state.number1, this.state.number2)}>Add</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>


            </div>
        )
    }
}
export default Sum