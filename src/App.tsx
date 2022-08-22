import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Diologs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {v1} from "uuid";

export type arrayAllDataType = {
    singlePostData: singlePostData[]
    dialogs: dialogsDataType[]
    message: messageDataType[]
}

export type singlePostData = {
    id: string
    message: string
    likeCount: number
}

export type dialogsDataType = {
    id: string
    name: string
    message: string
}
export type messageDataType = {
    id: string
    message: string
}

export function App(props:arrayAllDataType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <NavBar/>
                <Header/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} message={props.message}/>}/>
                    <Route path='/profile' render={() => <Profile singlePostData={props.singlePostData}/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}




