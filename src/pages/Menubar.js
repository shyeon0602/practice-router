import React from 'react';
import {Link} from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
            </ul>
        </div>
    );
};

export default Menubar;