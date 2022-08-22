import React from 'react';
import s from './MyPosts.module.css';
import {SinglePost} from "./Post/SinglePost";
import {NewPost} from "./Post/NewPost";
import {v1} from "uuid";

export type arraySinglePostDataType = {
    singlePostData: singlePostData[]
}

export type singlePostData = {
    id: string
    message: string
    likeCount: number
}

export const MyPosts = (props: arraySinglePostDataType) => {

    return (
        <div className={s.post}>
            <h3>My post</h3>
            <NewPost/>
            {
                props.singlePostData.map(el =>
                    <SinglePost massage={el.message} like={el.likeCount} id={el.id}/>
                )
            }


        </div>
    );
};

