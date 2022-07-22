import React from 'react';
import css from './MyPosts.module.css';
import {SinglePost} from "./Post/SinglePost";
import {NewPost} from "./Post/NewPost";


export const MyPosts = () => {
    return (
        <div className={css.post}>
            My post
            <NewPost/>
            <SinglePost massage={'Боря'} like={15}/>
            <SinglePost massage={'Не унывай'} like={60}/>
            <SinglePost massage={'я тебя люблю'} like={1000000000}/>
            <SinglePost massage={'Ты все преодолеешь!=))'} like={11210912903357527835}/>
        </div>
    );
};

