import './app-login.scss';
import logo from '../../assets/logo/logo.svg';
import FormLogin from '../form-login/form-login';

function AppLogin() {
  return (
    <div className="app-login">
      <div className="app-login__body">
        <div className="app-login__coll app-login__coll_w55p">
          <div className="app-login__info"></div>
        </div>
        <div className="app-login__coll app-login__coll_w45p">
          <header className="app-login__header">
            <img className="app-login__logo" src={logo} alt="Fort Monitor App" />
          </header>
          <main className="app-login__main">
            <h1 className="app-login__title">Добро пожаловать!</h1>
            <FormLogin />
          </main>
          <footer className="app-login__footer">
            <p className="app-login__copyright">©2022 Fort Telecom</p>
            <p className="app-login__developer">Developer: Stolbovvv</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default AppLogin;
