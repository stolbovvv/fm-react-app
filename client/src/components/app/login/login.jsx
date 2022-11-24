import './login.scss';
import { Component } from 'react';
import { Password, SignIn, User } from 'phosphor-react';
import Input from '../../app-ui/input/input';
import Button from '../../app-ui/button/button';

class Login extends Component {
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
      <div className="login">
        <div className="login__header">
          <h1 className="login__header-title">Fort Monitor App</h1>
        </div>
        <div className="login__form">
          <form className="form-login">
            <h2 className="form-login__title">Добро пожаловать!</h2>
            <fieldset className="form-login__filedset">
              <legend className="form-login__legend">Пожалуйста, введите данные для входа:</legend>
              <Input
                label="Логин"
                name="login"
                type="text"
                icon={<User size={24} />}
                value={login}
                onChange={this.handleInputChange}
              />
              <Input
                label="Пароль"
                name="password"
                type="password"
                icon={<Password size={24} />}
                value={password}
                onChange={this.handleInputChange}
              />
            </fieldset>
            <Button className="form-login__button" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" variant="outline" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" theme="primary" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" theme="primary" variant="outline" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" theme="secondary" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" theme="secondary" variant="outline" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" theme="info" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" theme="info" variant="outline" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" theme="warning" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" theme="warning" variant="outline" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" theme="danger" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" theme="danger" variant="outline" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" theme="success" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>

            <Button className="form-login__button" theme="success" variant="outline" type="submit" onClick={() => {}}>
              <SignIn size={24} />
              <span>Войти</span>
            </Button>
          </form>
        </div>
        <div className="login__footer">
          <p className="login__footer-copy">© 2022 Solbovvv</p>
        </div>
      </div>
    );
  }
}

export default Login;
