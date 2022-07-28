import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialog} from "./components/Diolog/Dialog";
import {Route} from "react-router-dom";


export function App() {
    return (

        <div className='app-wrapper'>
            <NavBar/>
            <Header/>
            <div className='app-wrapper-content'>
                <Dialog/>
                <Profile/>
            </div>


        </div>

    );
}




