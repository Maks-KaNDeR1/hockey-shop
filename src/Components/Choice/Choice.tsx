import React from 'react'
import s from './Choice.module.scss'
import { Item } from './Item/Item'
import img from '../../common/assets/images/11.png'
import arrowLeft from '../../common/assets/svg/arrow-left.svg'
import arrowRight from '../../common/assets/svg/arrow-right.svg'

type PropsType = {

}

export const Choice: React.FC<PropsType> = () => {
    return (
        <div className={s.choice}>
            <div className={s.choice__container} >
                <h1>Выбор наших клиентов</h1>
                <div className={s.arrows}>
                    <img src={arrowLeft} alt="" />
                    <img src={arrowRight} alt="" />
                </div>
            </div>
            <div className={s.choice__items}>
                <Item
                    image={img}
                    title='Хоккейная клюшка Заряд Т100'
                    price={14690}
                />
                <Item
                    image={img}
                    title='Хоккейная клюшка Заряд Т100'
                    price={14690}
                />
                <Item
                    image={img}
                    title='Хоккейная клюшка Заряд Т100'
                    price={14690}
                />
                <Item
                    image={img}
                    title='Хоккейная клюшка Заряд Т100'
                    price={14690}
                />
            </div>
            <div className={s.choice__runLines}>
                ma
                <div className={`${s.lines_2} ${s.line}`}>
                    <div>
                        <span>одежда</span>
                        <span>клюшки</span>
                        <span>одежда</span>
                        <span>клюшки</span>
                        <span>одежда</span>
                        <span>клюшки</span>
                        <span>одежда</span>
                        <span>клюшки</span>
                        <span>одежда</span>
                        <span>клюшки</span>
                    </div>
                </div>
                <div className={`${s.lines_1} ${s.line}`}>
                    <div>
                        <span>Уникальная клюшка с твоим именем</span>
                        <span>Уникальная клюшка с твоим именем </span>
                        <span>Уникальная клюшка с твоим именем </span>
                        <span>Уникальная клюшка с твоим именем </span>
                        <span>Уникальная клюшка с твоим именем </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

