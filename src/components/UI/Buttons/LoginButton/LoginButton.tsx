import React from 'react';
import style from './style.module.scss'

type Props = {
    handleClick: () => void
}

const LoginButton: React.FC<Props> = ({handleClick}) => {
    return (
        <button className={style.btn} onClick={handleClick}>
            Login
        </button>
    );
};

export {LoginButton};
