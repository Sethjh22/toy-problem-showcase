import React, {Component} from 'react';

class FilterString extends Component{

    constructor(){
        super()
        this.state = {
            unFilteredArray: ['Jordan', 'Ryan', 'Amanda', 'Aaron', 'Ben', 'Erica', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value){
        this.setState({userInput: value})
    }
    handleClick(userInput){
        let names = this.state.unFilteredArray
        let filteredNames = []
        for(let i=0; i<names.length; i++){
            if(names[i].includes(userInput)){
                filteredNames.push(names[i])
            }
        }
        this.setState({filteredArray: filteredNames})
    }



    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.unFilteredArray,null, 10)}</span>
                <input className='inputLine' onChange={(element)=> this.handleChange(element.target.value)}/>
                <button className='confirmationButton' onClick={()=> this.handleClick(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringPB'>Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>

            </div>
        )
    }
}
export default FilterString