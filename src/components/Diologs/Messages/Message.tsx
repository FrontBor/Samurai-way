import React from 'react';
import s from "../Messages/Messages.module.css";

type MessageType = {
    message: string
}

export const Message = (props:MessageType) => {
    return (
            <div className={s.messages}>
                <div className={s.message}>{props.message}</div>
            </div>


    );
};
