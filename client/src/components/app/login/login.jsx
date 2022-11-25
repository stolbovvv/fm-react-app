import LoginForm from '../login-form/login-form';
import logo from '../../../assets/logo.png';
import './login.scss';

function Login() {
  return (
    <div className="login">
      <header className="login__header">
        <img src={logo} alt="Fort Telecom" />
        <h1 className="login__header-title">Fort Monitor App</h1>
      </header>
      <div className="login__form">
        <LoginForm />
      </div>
      <footer className="login__footer">
        <p className="login__footer-copy">© 2022 Solbovvv</p>
      </footer>
    </div>
  );
}

export default Login;
