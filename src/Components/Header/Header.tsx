import React from 'react'
import s from './Header.module.scss'
import logo from '../../common/assets/svg/logo-min.svg'
import search from '../../common/assets/svg/search.svg'
import phone from '../../common/assets/svg/phone.svg'
import rating from '../../common/assets/svg/rating.svg'
import profile from '../../common/assets/svg/profile.svg'
import basket from '../../common/assets/svg/basket.svg'

type PropsType = {

}

export const Header: React.FC<PropsType> = () => {
    return (
        <header>
            <div className={s.logo}>
                <img src={logo} alt="" />
                <div>
                    <span>
                        Ru
                    </span>
                    <span>
                        / En
                    </span>
                </div>
            </div>
            <div className={s.link}>
                <a href='/' >Клюшки</a>
                <a href='/' >Одежда</a>
                <a href='/' >Аксессуары</a>
                <a href='/' >Кастомизация</a>
                <a href='/' >Отследить заказ</a>
            </div>
            <div className={s.svg}>
                <img src={search} alt="" />
                <img src={phone} alt="" />
                <img src={rating} alt="" />
                <img src={profile} alt="" />
                <img src={basket} alt="" />
            </div>
        </header>
    )
}
