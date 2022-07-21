import React from 'react';
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav className='nav'>
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Massages</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#">Setting</a>
            </div>
        </nav>
    );
};

