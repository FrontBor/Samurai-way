import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {v1} from "uuid";

export type arraySinglePostDataType = {
    singlePostData: singlePostData[]
}

export type singlePostData = {
    id: string
    message: string
    likeCount: number
}

export const Profile = (props:arraySinglePostDataType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts singlePostData={props.singlePostData}/>
        </div>
    );
};

