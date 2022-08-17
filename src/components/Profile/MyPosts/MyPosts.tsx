import React from 'react';
import s from './MyPosts.module.css';
import {SinglePost} from "./Post/SinglePost";
import {NewPost} from "./Post/NewPost";
import {v1} from "uuid";


export const MyPosts = () => {
    let likeCount = [
        {id: v1(), message: 'Привет мужик!', likeCount: 15},
        {id: v1(), message: 'Не грусти', likeCount: 60},
        {id: v1(), message: 'И иди к своей цели', likeCount: 1000000000},
        {id: v1(), message: 'Будет сложно, но ты справишься', likeCount: 11210912903357527835},

    ]
    return (
        <div className={s.post}>
            <h3>My post</h3>
            <NewPost/>
            {
                likeCount.map(el => {
                    return (
                        <SinglePost massage={el.message} like={el.likeCount} id={el.id}/>
                    )
                })
            }


        </div>
    );
};

