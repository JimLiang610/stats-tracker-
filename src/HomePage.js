import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Navbar from './Navbar.js';
import Title from './Title.js';
import PlayerLookup from './PlayerLookup.js';
import ValorantAPI from 'unofficial-valorant-api';
const valorantAPI = new ValorantAPI();

function HomePage() {
    const [accountInfo, setAccountInfo] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const accountArr = accountInfo.split('#');

        if (accountArr.length === 2) {
            try {
                const accountPromise = valorantAPI.getAccount({ name: accountArr[0], tag: accountArr[1] });
                const account = await accountPromise;
                if (account.status === 200) {
                    navigate('/PlayerProfilePage'); // Navigate using the navigate function
                } else {
                    console.error("Error: Account retrieval failed. Status code:", account.status);
                }
            } catch (error) {
                console.error("Error occurred:", error);
            }
        }
    }

    function handlePlayerLookup(string) {
        setAccountInfo(string);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Title />
                <Navbar />
                <PlayerLookup sendAccountString={handlePlayerLookup} />
            </form>
        </div>
    );
}

export default HomePage;