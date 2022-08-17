import React from 'react';
import s from './Diolog.module.css'
import {Users} from "./Users/Users";
import {Message} from "./Messages/Message";


export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Боряныч', message: 'Привет мужик!'},
        {id: 2, name: 'Санечек', message: 'Не грусти'},
        {id: 3, name: 'Женечек', message: 'И иди к своей цели'},
        {id: 4, name: 'Кузя', message: 'Будет сложно, но ты справишься'},
        {id: 5, name: 'Крокодил', message: '!!!'}
    ]
    let messageData = [
        {id: 1, message: 'Привет мужик!'},
        {id: 2, message: 'Не грусти'},
        {id: 3, message: 'И иди к своей цели'},
        {id: 4, message: 'Будет сложно, но ты справишься'},
        {id: 5, message: '!!!'}
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

