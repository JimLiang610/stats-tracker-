import React from "react";

class Navbar extends React.Component {
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