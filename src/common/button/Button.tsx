import React from 'react'
import s from './Button.module.scss'

type PropsType = {
    text: string
    way?: string
    primary?: boolean

}

export const Button: React.FC<PropsType> = ({ text, way, primary }) => {
    return (
        <span className={primary ? s.btnBlk__primary : s.btnBlk} >
            <a
                target="_blank"
                rel="noreferrer"
                href={way}
                className={primary ? s.btn__primary : s.btn}
            >
                {text}
            </a>
        </span>

    )
}
