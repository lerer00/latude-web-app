import * as React from 'react';
import { Jumbotron } from './jumbotron';
import { Tile } from './tile';
import { Button } from './button';
import './App.css';

const egoSquirrel = require('./img/ego/squirrel.svg');
const egoApple = require('./img/ego/apple.svg');
const egoLeaf = require('./img/ego/leaf.svg');
const egoShield = require('./img/ego/shield.svg');
const egoWallet = require('./img/ego/wallet.svg');
const egoClock = require('./img/ego/clock.svg');
const egoGramophone2 = require('./img/ego/gramophone-2.svg');
const egoTram = require('./img/ego/tram.svg');
const egoBusStop = require('./img/ego/bus-stop.svg');
const egoMultiPlatform = require('./img/ego/multi-platform.svg');
const egoPizza = require('./img/ego/pizza.svg');

class App extends React.Component {
  constructor() {
    super();
    this.whitepaperAction = this.whitepaperAction.bind(this);
  }

  whitepaperAction() {
    // Here redirect to our github or reroute to another page.
  }

  render() {
    return (
      <div className='app'>
        <div>
          <Jumbotron />
          <div className='availability-systems'>
            <div className='centered-division'>
              <h1 className='title line-separated'>Availability systems</h1>
              <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <Button text='Read our whitepaper' icon='icon' action={this.whitepaperAction} />
              <div className='container'>
                <div className='row'>
                  <div className='col-4'>
                    <Tile
                      title='Title alpha'
                      type={1}
                      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                      icon={egoApple}
                    />
                  </div>
                  <div className='col-4'>
                    <Tile
                      title='Title bravo'
                      type={1}
                      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                      icon={egoLeaf}
                    />
                  </div>
                  <div className='col-4'>
                    <Tile
                      title='Title charlie'
                      type={1}
                      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                      icon={egoSquirrel}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='benefits'>
            <div className='centered-division'>
              <h1 className='title line-separated'>More benefits</h1>
              <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <div className='container'>
                <div className='row'>
                  <div className='col-3'>
                    <Tile
                      title='Safe and Secure'
                      type={1}
                      description=''
                      icon={egoShield}
                    />
                  </div>
                  <div className='col-3'>
                    <Tile
                      title='Time saving'
                      type={1}
                      description=''
                      icon={egoClock}
                    />
                  </div>
                  <div className='col-3'>
                    <Tile
                      title='Open source'
                      type={1}
                      description=''
                      icon={egoGramophone2}
                    />
                  </div>
                  <div className='col-3'>
                    <Tile
                      title='Less friction'
                      type={1}
                      description=''
                      icon={egoTram}
                    />
                  </div>
                  <div className='col-3'>
                    <Tile
                      title='Money Saving'
                      type={1}
                      description=''
                      icon={egoWallet}
                    />
                  </div>
                  <div className='col-3'>
                    <Tile
                      title='Decentralized'
                      type={1}
                      description=''
                      icon={egoPizza}
                    />
                  </div>
                  <div className='col-3'>
                    <Tile
                      title='Public service'
                      type={1}
                      description=''
                      icon={egoBusStop}
                    />
                  </div>
                  <div className='col-3'>
                    <Tile
                      title='Easy to use'
                      type={1}
                      description=''
                      icon={egoMultiPlatform}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='overview'>
            <div className='centered-division'>
              <h1 className='title line-separated'>Network Overview</h1>
              <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <img src={'./latude-overview.png'} />
            </div>
          </div>
          <div className='footer'>
            <div className='footer-inner centered-division'>
              All rights reserved. latude. inc.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;