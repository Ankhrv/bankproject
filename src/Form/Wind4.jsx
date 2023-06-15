import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Wind4.css';
const Wind4 = () => {


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hmoh4pe', 'template_si5n3b9', form.current, 'pBgFTDGTqgd6JkT9M')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
   <div className='GL'> <form ref={form} onSubmit={sendEmail} className='te'>
      <p className='ui'>Хотите получить письменный ответ на вопрос? Напишите нам на электронную почту.</p>
      <input type="text" placeholder="Ваше имя" name="us_name" required />
      <input type="email" placeholder="Электронная почта" name="us_email" required />
      <textarea placeholder="Ваш вопрос или сообщение" name="message"></textarea>
      <button className='knop4' type="submit" value="Отправить"> Отправить</button>
      <p className='Tt'>
        Хотите получить письменный ответ на вопрос? Напишите нам на электронную почту.
        Нажимая кнопку "Отправить" вы подтверждаете что ознакомились и согласны с политикой конфиденциальности </p>
    </form>
    </div>


  );
}
export default Wind4;