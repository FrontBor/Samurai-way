import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {v1} from "uuid";

let singlePostData = [
    {id: v1(), message: 'Привет мужик!', likeCount: 15},
    {id: v1(), message: 'Не грусти', likeCount: 60},
    {id: v1(), message: 'И иди к своей цели', likeCount: 1000000000},
    {id: v1(), message: 'Будет сложно, но ты справишься', likeCount: 11210912903357527835},

]

let dialogsData = [
    {id: v1(), name: 'Боряныч', message: 'Привет мужик!'},
    {id: v1(), name: 'Санечек', message: 'Не грусти'},
    {id: v1(), name: 'Женечек', message: 'И иди к своей цели'},
    {id: v1(), name: 'Кузя', message: 'Будет сложно, но ты справишься'},
    {id: v1(), name: 'Крокодил', message: '!!!'}
]
let messageData = [
    {id: v1(), message: 'Привет мужик!'},
    {id: v1(), message: 'Не грусти'},
    {id: v1(), message: 'И иди к своей цели'},
    {id: v1(), message: 'Будет сложно, но ты справишься'},
    {id: v1(), message: '!!!'}
]

ReactDOM.render(
    <App singlePostData={singlePostData} dialogs={dialogsData} message={messageData}/>,
  document.getElementById('root')
);