import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import PlayerLookup from './PlayerLookup.js';
import ValorantAPI from 'unofficial-valorant-api';
const valorantAPI = new ValorantAPI();

function HomePage() {
    const [accountInfo, setAccountInfo] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook to get the navigation function

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

    function handleInputChange(event) {
        setAccountInfo(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={accountInfo} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default HomePage;