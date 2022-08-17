import React from 'react';
import s from "../Users/Users.module.css";
import {NavLink} from "react-router-dom";


export type UsersType = {
    name: string
    id: string
}

export const Users = (props:UsersType) => {

    return (

            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    {/*<img className={s.iconUser} src="https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg" alt="foto"/>*/}
                    <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
                </div>
            </div>


    );
};

