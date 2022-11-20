import React from 'react'
import s from './Item.module.scss'

type ItemType = {
    title: string
    description: string
    image: string
}

export const Item: React.FC<ItemType> = ({ title, description, image }) => {
    return <div className={s.item}>
        <h3>{title}</h3>
        <span>{description}</span>
        <img src={image} alt="" />
    </div>
}