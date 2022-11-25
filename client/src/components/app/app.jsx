import './app.scss';
import { Component } from 'react';
import Login from './login/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Login />
      </div>
    );
  }
}

export default App;
