import { Component } from "react";

class Playerlookup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input : ''
        };
        this.handleTextInput = this.handleTextInput.bind(this);
    }
    
    handleTextInput(event) {
        this.setState({input: event.target.value});
    } 

    render() {
        return(
            <div>
                <input value={this.state.input} onChange={this.handleTextInput} />
            </div>
        );
    }
}

export default Playerlookup;