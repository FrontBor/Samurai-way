import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.img} src="https://i.pinimg.com/736x/e9/e2/78/e9e2787d0cb55d570fe1c76843506759.jpg"alt="logo"/>
        </header>
    );
};

