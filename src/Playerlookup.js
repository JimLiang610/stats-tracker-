import React from "react";
//import the api module 
import ValorantAPI from 'unofficial-valorant-api';
const valorantAPI = new ValorantAPI();



class Playerlookup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input : ''
        };
        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    //gets called everytime user types in the input box 
    handleTextInput(event) {
        this.setState({input: event.target.value});
    } 

    async handleSubmit(event) {
        //prevent reloading page when user presses enter
        event.preventDefault();
        const playerInfoArr = this.state.input.split('#');
        console.log(playerInfoArr);
        //check if information is in correct format: playerName#playerTag
        if (playerInfoArr.length === 2) {
            // Retrieve player data from the API
            const playerData = await valorantAPI.getAccount({ name: playerInfoArr[0], tag: playerInfoArr[1] });
            console.log(playerData);
        } else {
            console.log('Invalid input format');
        }
        
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="input" value={this.state.input} onChange={this.handleTextInput} />
                </form>
            </div>
        );
    }
}

export default Playerlookup;