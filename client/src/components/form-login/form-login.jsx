import './form-login.scss';
import { Password, User } from 'phosphor-react';
import Button from '../ui/button/button';

function FormLogin() {
  return (
    <form className="form-login" action="#">
      <fieldset className="form-login__fieldset">
        <legend className="form-login__legend">Пожалуйста, введите данные для входа:</legend>
        <div className="form-login__input-wrapper">
          <User size={24} />
          <input type="text" placeholder="Логин" required="true" />
        </div>
        <div className="form-login__input-wrapper">
          <Password size={24} />
          <input type="password" placeholder="Пароль" required="true" />
        </div>
      </fieldset>
      <button className="form-login__button">Войти</button>
      <Button>Кнопка</Button>
    </form>
  );
}

export default FormLogin;
