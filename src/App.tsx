import * as React from 'react';
import { Jumbotron } from './jumbotron';
import { Tile } from './tile';
import { Button } from './button';
import './App.css';

const egoBuilding2 = require('./img/ego/building-2.svg');

class App extends React.Component {
  aggregateAboutTiles() {
    return (
      <Tile
        title='title'
        type={1}
        subtitle='subtitle'
        description='lorem ipsum'
        icon='Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      />);
  }

  render() {
    return (
      <div className='app'>
        <div>
          <Jumbotron />
          <div className='about centered-division'>
            <img className='about-icon' src={egoBuilding2} />
            <h1 className='about-title'>Peer to peer availability systems</h1>
            <p className='about-description'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            <Button text='Read our whitepaper' icon='icon' action={() => { console.log('test'); }} />
          </div>
          <div className='specification centered-division'>
            {this.aggregateAboutTiles()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;