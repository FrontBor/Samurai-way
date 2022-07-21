import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Profile} from "./components/Profile";
import {Header} from "./components/Header";


export function App() {
    return (
        <div className='app-wrapper'>
            <NavBar/>
            <Header/>
            <Profile/>
        </div>
    );
}




