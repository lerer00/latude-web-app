import * as React from 'react';
import { Jumbotron } from './jumbotron';
// import { Tile } from './tile';
import { Button } from './button';
import './App.css';

// const egoSquirrel = require('./img/ego/squirrel.svg');
// const egoApple = require('./img/ego/apple.svg');
// const egoLeaf = require('./img/ego/leaf.svg');
// const egoShield = require('./img/ego/shield.svg');
// const egoWallet = require('./img/ego/wallet.svg');
// const egoClock = require('./img/ego/clock.svg');
// const egoGramophone2 = require('./img/ego/gramophone-2.svg');
// const egoTram = require('./img/ego/tram.svg');
// const egoBusStop = require('./img/ego/bus-stop.svg');
// const egoMultiPlatform = require('./img/ego/multi-platform.svg');
// const egoPizza = require('./img/ego/pizza.svg');
const egoLab = require('./img/ego/lab.svg');
const egoLaunch = require('./img/ego/launch.svg');
const egoLogout1 = require('./img/ego/logout-1.svg');
const egoRobot = require('./img/ego/robot.svg');

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
          <div className='white-division'>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    <h1 className='title on-light line-separated'>A stuck industry</h1>
                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className='col-6'>
                    <img className='custom-svg-overview' src={egoLab} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='white-division'>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    <img className='custom-svg-overview' src={egoLaunch} />
                  </div>
                  <div className='col-6'>
                    <h1 className='title on-light line-separated'>Becoming independant</h1>
                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='white-division'>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    <h1 className='title on-light line-separated'>The Corner Stone</h1>
                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className='col-6'>
                    <img className='custom-svg-overview' src={egoRobot} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='dashed-division'>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-2' />
                  <div className='col-8 col'>
                    <h1 className='title on-light line-separated'>Read our whitepaper</h1>
                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Button
                      text='Read our whitepaper'
                      icon={egoLogout1}
                      action={this.whitepaperAction}
                    />
                  </div>
                  <div className='col-2' />
                </div>
              </div>
            </div>
          </div>
          <div className='blue-division'>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-2' />
                  <div className='col-8 col'>
                    <h1 className='title on-dark line-separated'>latude. network</h1>
                    <p className='description on-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  </div>
                  <div className='col-2' />
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <h1 className='title on-dark line-separated'>Piece #1 <br /> blockchain contracts</h1>
                    <p className='description on-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className='col-6'>
                    <img className='tile-icon' src={egoLab} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <h1 className='title on-dark line-separated'>Piece #2 <br /> blockchain listener</h1>
                    <p className='description on-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className='col-6'>
                    <img className='tile-icon' src={egoLab} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <h1 className='title on-dark line-separated'>Piece #3 <br /> DApp for owners</h1>
                    <p className='description on-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className='col-6'>
                    <img className='tile-icon' src={egoLab} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <h1 className='title on-dark line-separated'>Piece #4 <br /> DApp for users</h1>
                    <p className='description on-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className='col-6'>
                    <img className='tile-icon' src={egoLab} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='benefits'>
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
          </div> */}
          {/* <div className='overview'>
            <div className='centered-division'>
              <h1 className='title line-separated'>Network Overview</h1>
              <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <img src={'./latude-overview.png'} />
            </div>
          </div> */}
          <div className='footer white-division'>
            <div className='centered-division'>
              <p className='on-light'>All rights reserved. latude. inc.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;