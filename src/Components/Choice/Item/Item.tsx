import React from 'react'
import s from './Item.module.scss'
import rating from '../../../common/assets/svg/item-bottom.svg'

type PropsType = {
    image: string
    title: string
    price: number
}

export const Item: React.FC<PropsType> = ({ image, title, price }) => {
    return (
        <div className={s.item} >
            <img className={s.item__img} src={image} alt="" />
            <span className={s.item__title}>{title}</span>
            <div className={s.item__price}>{price} p</div>
            <div className={s.item__bottom}>
                <img src={rating} alt="" />
                <div> Подробнее </div>
            </div>
        </div>
    )
}