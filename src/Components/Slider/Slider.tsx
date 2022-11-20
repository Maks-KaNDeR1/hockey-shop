import React, { useState } from 'react'
import s from './Slider.module.scss'
import logo from '../../common/assets/svg/logo.svg'
import img1 from '../../common/assets/images/1.jpg'
import img3 from '../../common/assets/images/3.jpg'
import img2 from '../../common/assets/images/4.jpg'
import arrowLeft from '../../common/assets/svg/arrow-left.svg'
import arrowRight from '../../common/assets/svg/arrow-right.svg'
import play from '../../common/assets/svg/play-icon.svg'
import { Button } from '../../common/button/Button'
import { Carousel } from './Caorusel/Caorusel'

type PropsType = {

}

const rotate = (title: string) => (
    <svg viewBox="0 0 100 100" width="100" height="100" stroke="#F5F5F5">
        <defs>
            <path id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
        </defs>
        <text fontSize="10" fontWeight={'200'} >
            <textPath xlinkHref="#circle">
                {title}
            </textPath>
        </text>
    </svg>
)

export const Slider: React.FC<PropsType> = () => {

    const [pages, setPages] = useState<JSX.Element[]>([])
    const [offset, setOffset] = useState<number>(-1250)
    const PAGE_WIDTH = 1250

    const handleLeftArrowClick = () => {
        setOffset(current => {
            const newOffset = current + PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages?.length - 1))
            if (offset === 0) return maxOffset
            else return newOffset
        })
    }

    const handleRightArrowClick = () => {
        setOffset(current => {
            const newOffset = current - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages?.length - 1))
            if (offset === maxOffset) return 0
            else return newOffset
        })
    }


    return (
        <div className={s.sliderBlock} >
            <div className={s.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={s.slider} >
                <div className={s.orangeBackground}></div>
                <div className={s.slider__svg}>
                    <img onClick={handleLeftArrowClick} src={arrowLeft} alt="" />
                </div>
                <div className={s.slider__images}>
                    <Carousel pages={pages} setPages={setPages} offset={offset}>
                        <div className={s.slider__image}>
                            <div className={s.slider__image__title}>
                                <h3>
                                    Владимир Владимирович
                                </h3>
                                <div>
                                    Крутой хоккеист такой-то команды
                                </div>
                                <div className={s.rotate}>
                                    {rotate('владимир смотреть отзыв о владимире')}
                                    <img src={play} alt="" />
                                </div>
                            </div>
                            {/* <div className={s.slider__image__button}>
                                <Button text='В каталог' primary />
                            </div> */}
                            <img className={s.img} src={img2} alt="" />
                        </div>
                        <div className={s.slider__image}>
                            <div className={s.slider__image__title}>
                                <h3>
                                    Константин Константинович
                                </h3>
                                <div>
                                    Крутой хоккеист такой-то команды
                                </div>
                                <div className={s.rotate}>
                                    {rotate('констанин смотреть отзыв константина')}
                                    <img src={play} alt="" />
                                </div>
                            </div>
                            <div className={s.slider__image__button}>
                                <Button text='В каталог' primary />
                            </div>
                            <img className={s.img} src={img3} alt="" />
                        </div>
                        <div className={s.slider__image}>
                            <div className={s.slider__image__title}>
                                <h3>
                                    Максим Александрович
                                </h3>
                                <div>
                                    Еще круче хоккеист такой-то команды
                                </div>
                                <div className={s.rotate}>
                                    {rotate('максим смотреть отзыв александровича')}
                                    <img src={play} alt="" />
                                </div>
                            </div>
                            <div className={s.slider__image__button}>
                                <Button text='В каталог' primary />
                            </div>
                            <img className={s.img} src={img1} alt="" />
                        </div>
                        <div className={s.slider__image}>
                            <div className={s.slider__image__title}>
                                <h3>
                                    Константин Константинович
                                </h3>
                                <div>
                                    Крутой хоккеист такой-то команды
                                </div>
                                <div className={s.rotate}>
                                    {rotate('констанин смотреть отзыв константина')}
                                    <img src={play} alt="" />
                                </div>
                            </div>
                            {/* <div className={s.slider__image__button}>
                                <Button text='В каталог' primary />
                            </div> */}
                            <img className={s.img} src={img1} alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className={s.slider__svg}>
                    <img onClick={handleRightArrowClick} src={arrowRight} alt="" />
                </div>
                <div className={s.blueBackground}></div>
            </div>
        </div>
    )
}
