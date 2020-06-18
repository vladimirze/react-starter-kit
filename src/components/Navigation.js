import React from 'react';
import {Link} from "react-router-dom";


export const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/users">Users</Link>
            </li>

            <li>
                <Link to="/counter">Counter</Link>
            </li>

            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    )
}
