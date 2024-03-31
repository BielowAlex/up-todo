import React from 'react';
import style from './style.module.scss'
import {Logo} from "../Logo";
import {LoginButton} from "../UI";

const Header: React.FC = () => {
    const handleLogin = () => {

    }

    return (
        <header className={style.container}>
            <Logo/>
            <LoginButton handleClick={handleLogin}/>
        </header>
    );
};

export {Header};
