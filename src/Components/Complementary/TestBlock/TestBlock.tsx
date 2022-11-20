import React from 'react'
import s from './TestBlock.module.scss'
import img1 from '../../../common/assets/images/2.png'
import { Button } from '../../../common/button/Button'

type PropsType = {

}

export const TestBlock: React.FC<PropsType> = () => {
    return (
        <div className={s.testBlock} >
            <div className={s.testBlock__upper}>
                <h1>Подберем Вашу идеальную клюшку</h1>
                <span>Пройдите тест и узнайте какая клюшкам подойдет именно вам</span>
            </div>
            <div className={s.testBlock__bottom}>
                <img src={img1} alt="" />

                <div className={s.orangeBackground}></div>
                <div className={s.button}>
                    <Button text='Пройти тест' primary />
                </div>

                <div className={s.blueBackground}></div>
            </div>
        </div>
    )
}
