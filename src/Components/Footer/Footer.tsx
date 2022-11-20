import React from 'react'
import s from './Footer.module.scss'
import logo from '../../common/assets/svg/logo-footer.svg'
import imperium from '../../common/assets/svg/logo-imperium.svg'
import { Button } from '../../common/button/Button'

type PropsType = {

}

export const Footer: React.FC<PropsType> = () => {
    return (
        <footer>
            <div className={s.oneBlock}>
                <div className={s.oneBlock__logo}>
                    <img src={logo} alt="" />
                </div>
                <span className={`${s.str_1} ${s.str}`} ><div> Наименование </div>
                    ООО «ЗаряД»
                </span>
                <span className={s.str}> <div> Юридический адрес  </div>
                    Республика Татарстан, г. Набережные Челны,
                    ул. Альметьевский тракт, д. 6а
                </span>
                <div className={s.str_2}>
                    <span> <div> Телефон  </div>
                        +7 (800) 511-93-90
                    </span>
                    <span> <div> Email </div>
                        info@zaryad-hockey.ru
                    </span>
                    <span> <div> ИНН  </div>
                        1646040440
                    </span>
                    <span> <div>   ОГРН  </div>
                        1151674001632
                    </span>
                </div>
                <div className={s.str_3} >
                    <div>© 2017-2022 Заряд</div>
                    <div>Политика конфиденциальности</div>
                </div>
            </div>
            <div className={s.twoBlock}>
                <div>
                    <h3>О бредне</h3>
                    <div>История бренда</div>
                    <div>Технологии производства</div>
                    <div>Производство</div>
                    <div>Контакты магазинов</div>
                </div>
                <div className={s.str}>
                    <h3>Покупателям</h3>
                    <div>Доставка и оплата</div>
                    <div>Обмен и возврат</div>
                    <div>Гарантия</div>
                </div>
            </div>
            <div className={s.twoBlock}>
                <div>
                    <h3>Партнерам</h3>
                    <div>Как стать партнером</div>
                    <div>Как мы работаем</div>
                    <div>Информация о выборе контрагентов</div>
                </div>
                <div className={s.str_1}>
                    <div>Бонусная программа</div>
                    <div>Таблица размеров</div>
                    <div>Подарочный сертификат</div>
                </div>
            </div>
            <div className={s.fourBlock}>
                <div className={s.button}>
                    <Button text='Связаться с нами' />
                </div>
                <img className={s.footer_imper} src={imperium} alt="" />
            </div>
        </footer>
    )
}
