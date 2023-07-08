import React from 'react';
import a from './Menu.module.css';
import b from './mobilmenu/mobilmenu.module.css';
import Sticky from 'react-stickynode';
import { Link } from "react-router-dom";


const Menu1 = () => {

    return (
        <div className={b.MenOb1}>

          <Sticky enabled={true}>   {/* bottomBoundary={1200} */}

                <div>

                    <div className={a.navbar}>
                        <ul className={a.mmenuu}>
                            <li> <Link to="/"><a>Автополив</a></Link>
                                {/* <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Link</a></li>
                                </ul> */}
                            </li>
                            <li> <Link to="/landshaftnyj-dizajn"><a>Ландшафтный дизайн</a></Link>
                                {/* <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Link</a></li>
                                    <li><a href='#'>Link</a></li>
                                </ul> */}
                            </li>
                            <li><a href='#'>Озеленение и благоустройство</a>
                                <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Дизайн-проект</a></li>
                                    <li><a href='#'>Link</a></li>
                                    <li><a href='#'>Link</a></li>
                                </ul>
                            </li>
                            <li><Link to="/Derevja"><a>Растения</a></Link>
                                {/* <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Деревья</a></li>
                                </ul> */}
                            </li>
                            <li><Link to="/Price"><a>Прайс-лист</a></Link>
                                {/* <ul className={a.ssubmenuu}>
                                    <li><a href='#'>расчет стоимости</a></li>
                                </ul> */}
                            </li>
                            <li><Link to="/Obslugivaniye"><a>Консервация и обслуживание</a></Link>
                                {/* <ul className={a.ssubmenuu}>
                                    <li><a href='#'>гарантии</a></li>
                                </ul> */}
                            </li>
                            <li><Link to="/Novinky"><a>Новинки сезона</a></Link>
                                {/* <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Водопады</a></li>
                                </ul> */}
                            </li>
                            <li><a href='#'>О нас</a>
                            <ul className={a.ssubmenuu2}>
                                    <li><Link to="/Contacts"><a>Контаты</a></Link></li>
                                    <li><Link to="/Actions"><a>Акции</a></Link></li>
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