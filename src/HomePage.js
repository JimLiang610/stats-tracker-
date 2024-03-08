import React from "react";
import Title from './Title.js';
import Navbar from './Navbar.js';
import PlayerLookup from './PlayerLookup';
//import the api module 
import ValorantAPI from 'unofficial-valorant-api';
const valorantAPI = new ValorantAPI();

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            playerInfoArr: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlayerLookup = this.handlePlayerLookup.bind(this);
    }
    
    handlePlayerLookup(arr) {
        this.setState({playerInfoArr: arr})
        if (this.state.playerInfoArr.length == 2) {
            valorantAPI.getAccount({name: this.state.playerInfoArr[0], tag: this.state.playerInfoArr[1]});
        }
    }

    //TODO: error handling for invalid input
    handleSubmit(event) {
        //prevent reloading page when user presses enter
        event.preventDefault();
        //convert text input to array 
        const playerInfoArr = this.state.input.split('#');
        this.handlePlayerLookup(playerInfoArr);
    }


    render(){
        return (
            <div className='App'>
            <Title />
            <Navbar />
            <form onSubmit={this.handleSubmit}>
                <PlayerLookup sendAccountArr={this.handlePlayerLookup}/>
            </form>
            </div>
        );
    }
}