import React from 'react';
import сp from './Wind3.module.css';
import './w3.css';
import i1 from '../Str7/icons82.png' ;
import i2 from '../Str7/icons8.png' ;
import i3 from '../Str7/icons81.png' ;
import i4 from '../Str7/icons83png.png' ;


const Wind3 = () => {
    return (
         <div className={сp.oo}> 

         <div className={сp.e1}>
            <div ><p className='kll'>Обратная связь</p>
            <p className='kll2'> <img src={i2} alt='i2' className="ii1"></img>+7 (937) 263-90-10 </p>
            <p className='kll2'><img src={i3} alt='i2' className="ii1"></img>harmonY64@yandex.ru</p>
            <p className='kll2'><img src={i1} alt='i1' className="ii1"></img>Предоставляем услуги в РФ, г. Саратов и области</p>
            <p className='kll2'><img src={i4} alt='i2' className="ii1"></img>Понедельник - Пятница: 9:00 - 18:00. </p>
            <button className='knop' type="submit" value="Заказать звонок">Заказать звонок</button></div>
            <div ></div>

            </div></div>



    );
}
export default Wind3;