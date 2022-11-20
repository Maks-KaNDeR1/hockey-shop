import React, { Children, cloneElement, ReactElement, useEffect, } from 'react'
import s from './Caorusel.module.scss'

interface CarouselProps {
    children: ReactElement[]
    pages: JSX.Element[]
    setPages: (value: JSX.Element[]) => void
    offset: number
}

export const Carousel: React.FC<CarouselProps> = ({ children, pages, setPages, offset }) => {

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `992px`,
                        maxWidth: `992px`
                    }
                })
            })
        )
    }, [])

    return (
        <div className={s.container}>
            <div className={s.wimdow}>
                <div
                    className={s.all_items_container}
                    style={{
                        transform: `translateX(${offset}px)`
                    }}
                >
                    {pages}
                </div>
            </div>
        </div>
    )
}
