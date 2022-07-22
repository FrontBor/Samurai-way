import React from 'react';
import navbar from './NavBar.module.css';

export const NavBar = () => {
    return (
        <nav className={navbar.nav}>
            <div className={navbar.item}>
                <a href="src/components/NavBar/NavBar#">Profile</a>
            </div>
            <div className={navbar.item}>
                <a href="src/components/NavBar/NavBar#">Massages</a>
            </div>
            <div className={navbar.item}>
                <a href="src/components/NavBar/NavBar#">News</a>
            </div>
            <div className={navbar.item}>
                <a href="src/components/NavBar/NavBar#">Music</a>
            </div>
            <div className={navbar.item}>
                <a href="src/components/NavBar/NavBar#">Setting</a>
            </div>
        </nav>
    );
};

