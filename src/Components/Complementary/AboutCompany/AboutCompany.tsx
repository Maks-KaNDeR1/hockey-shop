import React from 'react'
import s from './AboutCompany.module.scss'
import img21 from '../../../common/assets/images/21.jpg'
import img22 from '../../../common/assets/images/22.jpg'
import { Item } from './Item/Item'
import { Button } from '../../../common/button/Button'

type PropsType = {

}

export const AboutCompany: React.FC<PropsType> = () => {
    return (
        <div className={s.aboutCompany}>
            <div className={s.aboutCompany__about}>
                <h1>О Бренде ЗаряД</h1>
                <span className={s.title}>
                    Первый завод в россии по производству полного
                    ассортимента высококачественных хоккейных клюшек для всех возрастных
                    категорий и уровней игры
                </span>
                <div className={s.button}>
                    <Button text='Подробнее о компании' />
                </div>
            </div>
            <div className={s.aboutCompany__items} >
                <Item title='Космические технологии' description='Первый завод в россии по производству полного ассортимента высококачественных хоккейных клюшек для всех возрастных категорий и уровней игры'
                    image={img21}
                />
                <Item title='Российский стиль' description='Клюшки заряд специально спроектированы для точной игры в пас, первого длинного паса, максимального контроля шайбы и остроатакующей комбинационной игры'
                    image={img22}
                />
            </div>
        </div>
    )
}

