import React from 'react';
import navbar from './NavBar.module.css';

export const NavBar = () => {
    return (
        <nav className={navbar.nav}>
            <div className={navbar.item}>
                <a href="#">Profile</a>
            </div>
            <div className={navbar.item}>
                <a href="#">Massages</a>
            </div>
            <div className={navbar.item}>
                <a href="#">News</a>
            </div>
            <div className={navbar.item}>
                <a href="#">Music</a>
            </div>
            <div className={navbar.item}>
                <a href="#">Setting</a>
            </div>
        </nav>
    );
};

