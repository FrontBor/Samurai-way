import React from 'react';
import s from "./NewPost.module.css";

export const NewPost = () => {
    return (
        <div className={s.item}>
            <div className={s.newPostText}>
                <textarea name="" id=""></textarea>
            </div>

            <button className={s.buttonNewPost}>add</button>
        </div>
    );
};

