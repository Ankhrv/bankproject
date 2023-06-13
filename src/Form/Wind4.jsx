import React from 'react';

import './Wind4.css';
const Wind4 = () => {
    return (

<form className='te' action="/" method="post">
<p className='ui'>Хотите получить письменный ответ на вопрос? Напишите нам на электронную почту.</p>
<input type="text" placeholder="Ваше имя"></input>
<input type="email" placeholder="Электронная почта"></input>
<textarea placeholder="Ваш вопрос или сообщение"></textarea>

    <input className='knop' type="submit" value="Отправить"></input>
  <p className='Tt'>

Хотите получить письменный ответ на вопрос? Напишите нам на электронную почту.
Нажимая кнопку "Отправить" вы подтверждаете что ознакомились и согласны с политикой конфиденциальности </p>
  </form>

 
  
    );
}
export default Wind4;