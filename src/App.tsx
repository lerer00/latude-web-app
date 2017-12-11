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
// const egoPizza = require('./img/eg/pizza.svg');
const egoBusinessWorkStation2 = require('./img/ego/business-work-station-2.svg');
const egoDevices = require('./img/ego/devices.svg');
const egoLab = require('./img/ego/lab.svg');
const egoLaunch = require('./img/ego/launch.svg');
const egoLogout1 = require('./img/ego/logout-1.svg');
const egoMultiPlatform2 = require('./img/ego/multi-platform-2.svg');
const egoNetwork = require('./img/ego/network.svg');
const egoTransferFile = require('./img/ego/transfer-file.svg');

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
                    <img src={egoLab} />
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
                    <img src={egoLaunch} />
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
                    <img src={egoDevices} />
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
                  <div className='col-2'>
                    <img className='icon on-dark-icon' src={egoTransferFile} />
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-dark'>Module #1: blockchain contracts</h1>
                    <p className='description description-left on-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2'>
                    <img className='icon on-dark-icon' src={egoNetwork} />
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-dark'>Module #2: blockchain listener</h1>
                    <p className='description description-left on-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2'>
                    <img className='icon on-dark-icon' src={egoBusinessWorkStation2} />
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-dark'>Module #3: DApp for owners</h1>
                    <p className='description description-left on-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-2'>
                    <img className='icon on-dark-icon' src={egoMultiPlatform2} />
                  </div>
                  <div className='col-10'>
                    <h1 className='title-2 on-dark'>Module #4: DApp for users</h1>
                    <p className='description description-left on-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='white-division'>
            <div className='centered-division'>
              <div className='container timeline'>
                <div className='row'>
                  <div className='col-2' />
                  <div className='col-8 col'>
                    <h1 className='title on-light line-separated'>Timeline</h1>
                    <p className='description on-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  </div>
                  <div className='col-2' />
                </div>
                <div className='row'>
                  <div className='col-3 line-division'>
                    <div className='line-event'>
                      <img className='icon' src={egoMultiPlatform2} />
                    </div>
                  </div>
                  <div className='col-9 col'>
                    <h1 className='title-2 on-light'>January 2018</h1>
                    <p className='description description-left on-light'>Bootstrap that project</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-3 line-division'>
                    <div className='line-event'>
                      <img className='icon' src={egoMultiPlatform2} />
                    </div>
                  </div>
                  <div className='col-9 col'>
                    <h1 className='title-2 on-light'>January 2018</h1>
                    <p className='description description-left on-light'>Bootstrap that project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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