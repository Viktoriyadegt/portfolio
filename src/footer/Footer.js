import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Victoria Degtyareva</h2>
                <div className={style.footer}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
                <span className={style.text}>© 2022 Все права защищены</span>
            </div>
        </div>
    );
};

