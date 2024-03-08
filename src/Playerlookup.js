import React from 'react';

class PlayerLookup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
        this.handleTextInput = this.handleTextInput.bind(this);
    }
    
    //gets called everytime user types in the input box 
    handleTextInput(event) {
        this.setState({input: event.target.value});
    } 

    render() {
        return(
            <div>
                    <input type="input" value={this.state.input} onChange={this.handleTextInput} />
            </div>
        );
    }
}

export default PlayerLookup;