import React from 'react';
import s from "../Profile.module.css";

export const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img className={s.img}
                     src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                     alt=""/>
            </div>
            <div>
                <img className={s.ava} src="https://upload.wikimedia.org/wikipedia/ru/0/0f/Mortal_kombat_logo.png"
                     alt=""/>
                <div className={s.discriptionBlock}>
                    Lorem ipsum dolor sit amet, consectetur.
                </div>
            </div>
        </div>
    );
};

