import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserData = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Fetch user data
        axios.get('https://api.github.com/users/kallDun')
            .then(response => setUser(response.data))
            .catch(error => console.error(error));
    }, []);

    if (!user.login) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <h3>{user.login} (github)</h3>
            <img src={user.avatar_url} alt={user.login}/>
        </div>
    );
};

export default UserData;