import React from 'react';
import s from './Header.module.css';
import logo from '../Header/Logotip/24.png'; 
import tel from '../Header/Contacts/logo.messangers/77.png';
import tel2 from '../Header/Contacts/logo.messangers/32.png';
import tel3 from '../Header/Contacts/logo.messangers/33.png';
import tel4 from '../Header/Contacts/logo.messangers/34.png'
// import Logo from './Logotip/Logo';
// import Text from './Text/Text';
// import Contacts from './Contacts/Contacts';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        
        <div className={s.q111}>
           <div className={s.logcont}>
           
           <div className={s.q1}>
        <div className={s.q01}>
        <Link to="/">H</Link>
        <Link to="/">U</Link>
            {/* <a href="#1">U</a> */}
        </div>
        <div className={s.q2}>
            {/* <a>Harmony</a> */}
            <Link to="/">Harmony</Link>
            <Link to="/">Uchastka</Link>
        </div>
        </div>

        <div className={s.q33}>
            <a><img src={tel2} alt='tel2' className={s.ii2}></img><img src={tel3} alt='tel3' className={s.ii3}></img><img src={tel4} alt='tel4' className={s.ii4}></img></a>
            <a><img src={tel} alt='tel' className={s.ii1}></img> +7 (937) 263-90-10</a>
        </div>
            </div> 
            

            

            <div className={s.q4}>
        <a><img src={logo} alt='logo' className={s.ii}></img> Выезд и расчёт - бесплатно</a>
    </div>

            <div className={s.q5}>
            <Link to="/Profile">Войти</Link>  
            {/* <a href="/Profile">Войти</a> */}
            </div> 
            </div>     
        
           

            
    );
}
export default Header;