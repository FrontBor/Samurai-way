import React from 'react';
import s from './Diolog.module.css'
import {Users} from "./Users/Users";
import {Message} from "./Messages/Message";
import {v1} from "uuid";


export const Dialogs = () => {
    let dialogsData = [
        {id: v1(), name: 'Боряныч', message: 'Привет мужик!'},
        {id: v1(), name: 'Санечек', message: 'Не грусти'},
        {id: v1(), name: 'Женечек', message: 'И иди к своей цели'},
        {id: v1(), name: 'Кузя', message: 'Будет сложно, но ты справишься'},
        {id: v1(), name: 'Крокодил', message: '!!!'}
    ]
    let messageData = [
        {id: v1(), message: 'Привет мужик!'},
        {id: v1(), message: 'Не грусти'},
        {id: v1(), message: 'И иди к своей цели'},
        {id: v1(), message: 'Будет сложно, но ты справишься'},
        {id: v1(), message: '!!!'}
    ]

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {
                        dialogsData.map(el => {
                            return (
                                <Users name={el.name} id={el.id}/>
                            )
                        })
                    }

                </div>
                <div className={s.messages}>
                    {
                        messageData.map(el => {
                            return (
                                <Message message={el.message} id={el.id}/>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

