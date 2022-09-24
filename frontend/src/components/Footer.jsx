import React from 'react'
import { FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'

export default function Footer() {
    return (
        <div className='footer container footer-context'>
            <div className='footer_content is-flex is-flex-direction-column'>
                <div className='is-flex is-justify-content-space-between mb-6'>
                    <svg width="421" height="66" viewBox="0 0 421 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M387.672 48.5907C387.672 45.3456 390.958 44.6235 394.52 43.6324C396.711 43.0916 398.994 42.4632 400.913 41.1095V46.9682C399.086 49.9444 395.98 51.6576 391.873 51.6576C389.407 51.6576 387.672 50.4071 387.672 48.5907V48.5907ZM373.522 33.6189C377.72 30.7333 385.664 28.57 393.697 28.57C398.355 28.57 400.913 29.289 400.913 31.0929C400.913 33.7065 397.167 34.2473 390.781 35.329C381.102 37.0422 368.136 39.3932 368.136 51.1981C368.136 60.1205 373.705 65.0788 383.749 65.0788C390.781 65.0788 396.167 62.3746 400.916 57.2381V64.0065H421V34.0785C421 21.9985 411.14 14.3359 395.619 14.3359C386.855 14.3359 379.367 15.5052 373.525 17.581L373.522 33.6189Z" fill="#E4002B" />
                        <path d="M310.884 64.0046H331.61V42.8208L343.936 64.0046H368.497L350.234 35.968L368.586 15.3251H346.403L331.61 35.968V0H310.884V64.0046Z" fill="#E4002B" />
                        <path d="M246.336 64.0049H267.154V35.3368C268.798 31.3726 271.537 29.6594 275.463 29.6594C279.937 29.6594 282.675 32.9952 282.675 38.4943V64.0049H303.573V35.1586C303.573 22.7159 295.629 14.4219 283.67 14.4219C276.549 14.4219 270.612 17.1292 266.413 21.9969V15.3254H246.327L246.336 64.0049Z" fill="#E4002B" />
                        <path d="M238.118 0H217.303V9.01623H238.118V0Z" fill="#E4002B" />
                        <path d="M238.118 15.3203H217.303V63.9998H238.118V15.3203Z" fill="#E4002B" />
                        <path d="M162.981 63.9998H210.915V49.5782H187.722L210.184 29.3824V15.411L164.805 15.3203V29.745H185.259L162.981 49.7564V63.9998Z" fill="#E4002B" />
                        <path d="M119.974 64.0068H140.801V36.2422C142.448 32.0936 145.643 30.4711 150.756 30.4711C154.135 30.4711 157.421 31.0963 159.622 32.0029V14.7865C158.578 14.5267 157.503 14.4048 156.427 14.4238C149.486 14.4238 143.917 17.672 140.083 23.2587V15.3273H119.974V64.0068Z" fill="#E4002B" />
                        <path d="M75.2365 39.6667C75.2365 32.7232 78.3426 28.8466 83.9121 28.8466C89.4816 28.8466 92.5845 32.7232 92.5845 39.6667C92.5845 46.6102 89.4816 50.4837 83.9121 50.4837C78.3426 50.4837 75.2365 46.6071 75.2365 39.6667ZM83.9121 64.9084C101.988 64.9084 113.583 55.0825 113.583 39.6667C113.583 23.7226 102.536 14.4219 83.9121 14.4219C65.8327 14.4219 54.2378 24.2509 54.2378 39.6667C54.2378 55.6108 65.2849 64.9084 83.9121 64.9084Z" fill="#E4002B" />
                        <path d="M0 64.0046H20.7264V42.8208L33.0527 64.0046H57.6135L39.3536 35.968L57.7053 15.3251H35.5192L20.7264 35.968V0H0V64.0046Z" fill="#E4002B" />
                    </svg>


                    <div className='is-flex'>
                        <FaTelegramPlane className='media_icons mx-5' />
                        <ImFacebook className='media_icons mx-5' />
                        <FaYoutube className='media_icons mx-5' />
                        <FaInstagram className='media_icons ml-5' />
                    </div>
                </div>

                <h1 className='title'> Всё лучше и лучше</h1>

                <div className='is-flex footer_categories my-2'>
                    <p className='mr-3 hovering'>Каталог</p>
                    <p className='mr-3 hovering'>Лояльность</p>
                    <p className='mr-3 hovering'>Карьера</p>
                    <p className='mr-3 hovering'>О нас</p>
                    <p className='mr-3 hovering'>Магазины</p>
                    <p className='mr-3 hovering'>Новости</p>
                    <p className='mr-3 hovering'>Поставщикам</p>
                </div>

                <div className='is-flex footer_categories my-2'>
                    <p className='mr-3 hovering'>Использование материалов</p>
                    <p className='mr-3 hovering'>Обратная связь</p>
                    <p className='mr-3 hovering'>Реквизиты</p>
                </div>

                <div className='is-flex footer_categories my-2'>
                    <p className='mr-3 hovering'>Правила программы лояльности</p>
                    <p className='mr-3 hovering'>Кодекс деловой этики</p>
                </div>

                <div className='my-6 py-6 is-flex is-justify-content-space-between'>
                    <div className='p-0 column is-5 is-flex is-justify-content-space-between'>
                        <div>
                            <p className='is-clickable'>+998 (78) 140-14-14</p>
                            <p>Колл - центр</p>
                        </div>
                        <div>
                            <p className='is-clickable'>Политика конфиденциальности</p>
                            <p>© Anglesey Food 1996-2022</p>
                        </div>
                    </div>

                    <div>
                        Дизайн —  <span className='is-clickable'>MAX</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
