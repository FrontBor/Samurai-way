import React from 'react';
import css from "./SinglePost.module.css";

type SinglePostType = {
    massage: string
    like: number
}

export const SinglePost = (props: SinglePostType) => {
    return (
        <div className={css.item}>
            <img className={css.img}
                 src="https://ixbt.online/gametech/covers/2021/05/31/d80XOIVNlVwHZxl4sh9qBSK3gPLU8Ix7576AiyJo.jpg"
                 alt="#"/>
            <div>
                {props.massage}
            </div>
            <div>
                <button>LIKE</button>
                <span>
                    {props.like}
                </span>
            </div>
        </div>
    );
};

