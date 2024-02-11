import { Component } from "react";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: 0,
            options: ['Home', 'Leaderboard']
        };
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Home</li>
                    <li>Leaderboard</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;