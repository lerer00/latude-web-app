import * as React from 'react';
import { Jumbotron } from './jumbotron';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div>
          <Jumbotron />
        </div>
      </div>
    );
  }
}

export default App;