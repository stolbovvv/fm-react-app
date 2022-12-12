import './app.scss';
import { Component } from 'react';
import AppLogin from '../app-login/app-login';
import AppDashboard from '../app-dashbord/app-dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTheUserAuth: false,
    };
  }

  render() {
    const { isTheUserAuth } = this.state;

    return <div className="app">{isTheUserAuth ? <AppDashboard /> : <AppLogin />}</div>;
  }
}

export default App;
