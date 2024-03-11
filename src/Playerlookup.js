import React from 'react';

class PlayerLookup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //this string is rendered in the UI 
            input: '',
        };
        this.handleTextInput = this.handleTextInput.bind(this);
    }
    
    //gets called everytime user types in the input box 
    handleTextInput(event) {
        //need callback function here to ensure state changes happen before passing it up to HomePage.js
        this.setState({ input: event.target.value }, () => {
            const { sendAccountString } = this.props;
            sendAccountString(this.state.input);
        });
    } 

    render() {
        return(
            <div>                                            {/*executes each time the user types (generates event object)*/}
                <input type="input" value={this.state.input} onChange={this.handleTextInput} />
            </div>
        );
    }
}

export default PlayerLookup;