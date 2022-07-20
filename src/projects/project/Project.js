import React from 'react';
import style from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a href="project" className={style.image}>Смотреть</a>
            </div>
                <div className={style.title}>{props.title}</div>
                <span className={style.description}>{props.description}</span>
        </div>
    );
};
