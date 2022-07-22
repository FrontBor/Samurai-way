import React from 'react';
import header from './Header.module.css';

export const Header = () => {
    return (
        <header className={header.header}>
            <img className={header.img}
                src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
                alt=""/>
        </header>
    );
};

