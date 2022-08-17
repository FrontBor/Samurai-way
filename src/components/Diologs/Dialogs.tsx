import React from 'react';
import s from './Diolog.module.css'
import {Users} from "./Users/Users";
import {Message} from "./Messages/Message";




export const Dialogs = () => {

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <Users name={'Боряныч'} id={1}/>
                    <Users name={'Санечек'} id={2}/>
                    <Users name={'Женечек'} id={3}/>
                    <Users name={'Кузя'} id={4}/>
                    <Users name={'Крокодил'} id={5}/>

                </div>
                <div className={s.messages}>
                    <Message message={'Привет мужик!'}/>
                    <Message message={'Не грусти'}/>
                    <Message message={'И иди к своей цели'}/>
                    <Message message={'Будет сложно, но ты справишься'}/>
                </div>
            </div>
        </div>
    );
};

