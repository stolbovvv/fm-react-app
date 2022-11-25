import './login-form.scss';
import { Component } from 'react';
import { Password, SignIn, User } from 'phosphor-react';
import Input from '../../app-ui/input/input';
import Button from '../../app-ui/button/button';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { login, password } = this.state;

    return (
      <form className="form-login">
        <h2 className="form-login__title">Добро пожаловать!</h2>
        <fieldset className="form-login__filedset">
          <legend className="form-login__legend">Пожалуйста, введите данные для входа:</legend>
          <Input
            name="login"
            type="text"
            placeholder="Логин"
            icon={<User size={24} />}
            value={login}
            onChange={this.handleInputChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Пароль"
            icon={<Password size={24} />}
            value={password}
            onChange={this.handleInputChange}
          />
        </fieldset>
        <Button className="form-login__button" theme="primary" type="submit" onClick={() => {}}>
          <SignIn size={24} />
          <span>Войти</span>
        </Button>
      </form>
    );
  }
}

export default LoginForm;
