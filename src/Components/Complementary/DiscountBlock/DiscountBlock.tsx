import React from 'react'
import s from './DiscountBlock.module.scss'
import percent from '../../../common/assets/svg/percent.svg'
import light from '../../../common/assets/svg/light.svg'
import img from '../../../common/assets/images/30.jpg'
import { Button } from '../../../common/button/Button'

type PropsType = {

}

export const DiscountBlock: React.FC<PropsType> = () => {
    return (
        <div className={s.discBlock}>
            <div className={s.disc__content} >
                <div className={s.disc__content__title} >
                    <div className={s.aboutDisc} >
                        Получи
                        <span className={s.light}>
                            <img src={light} alt="" />
                            <div></div>
                        </span>
                        <div className={s.percent}>
                            <div></div>
                            <img src={percent} alt="" /> скидку
                            <span className={s.price}>500 ₽</span>
                        </div>
                        за подписку
                    </div>
                    <div className={s.text}>
                        Никакого спама и рекламы, только полезная информация, скидки и персональные предложения
                    </div>
                    <input type="text" placeholder='Ваш Email' />
                    <div className={s.button}>
                        <Button text='Подписаться' primary />
                    </div>
                </div>
                <div className={s.disc__content__imgBlock}>
                    <div className={s.above}>
                        <div className={s.border}>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
