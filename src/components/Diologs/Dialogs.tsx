import React from 'react';
import s from './Diologs.module.css'
import {Users} from "./Users/Users";
import {Message} from "./Messages/Message";
import {v1} from "uuid";

export type arrayDialogsDataType = {
    dialogs: dialogsDataType[]
    message: messageDataType[]
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

export const Dialogs = (props: arrayDialogsDataType) => {



    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {
                        props.dialogs.map(el =>
                            <Users name={el.name} id={el.id}/>
                        )
                    }
                </div>
                <div className={s.messages}>
                    {
                        props.message.map(el =>
                            <Message message={el.message} id={el.id}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

