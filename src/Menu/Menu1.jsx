import React from 'react';
import a from './Menu.module.css';
import b from './mobilmenu/mobilmenu.module.css';
import Sticky from 'react-stickynode';

const Menu1 = () => {

    return (
        <div className={b.MenOb1}>

          <Sticky enabled={true}>   {/* bottomBoundary={1200} */}

                <div>

                    <div className={a.navbar}>
                        <ul className={a.mmenuu}>
                            <li><a href='#'>Автополив</a>
                                <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Link</a></li>
                                </ul>
                            </li>
                            <li><a href='#'>Ландшафтный дизайн</a>
                                <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Link</a></li>
                                    <li><a href='#'>Link</a></li>
                                </ul>
                            </li>
                            <li><a href='#'>Озеленение и благоустройство</a>
                                <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Дизайн-проект</a></li>
                                    <li><a href='#'>Link</a></li>
                                    <li><a href='#'>Link</a></li>
                                </ul>
                            </li>
                            <li><a href='#'>Растения</a>
                                <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Деревья</a></li>
                                </ul>
                            </li>
                            <li><a href='#'>Прайс-лист</a>
                                <ul className={a.ssubmenuu}>
                                    <li><a href='#'>расчет стоимости</a></li>
                                </ul>
                            </li>
                            <li><a href='#'>Консервация и обслуживание</a>
                                <ul className={a.ssubmenuu}>
                                    <li><a href='#'>гарантии</a></li>
                                </ul>
                            </li>
                            <li><a href='#'>Новинки сезона</a>
                                <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Водопады</a></li>
                                </ul>
                            </li>
                            <li><a href='#'>О нас</a>
                                <ul className={a.ssubmenuu2}>
                                    <li><a href='#'>обратная связь</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </Sticky>

        </div>

    );

}

export default Menu1;