import * as React from 'react';
import { Jumbotron } from './jumbotron';
import { Button } from './button';
import './App.css';

const egoBusinessWorkStation2 = require('./img/ego/business-work-station-2.svg');
const egoDevices = require('./img/ego/devices.svg');
const egoLab = require('./img/ego/lab.svg');
const egoLaunch = require('./img/ego/launch.svg');
const egoLogout1 = require('./img/ego/logout-1.svg');
const egoMultiPlatform2 = require('./img/ego/multi-platform-2.svg');
const egoNetwork = require('./img/ego/network.svg');
const egoTransferFile = require('./img/ego/transfer-file.svg');
const egoStandingDesk = require('./img/ego/standing-desk.svg');

const egoBusinessIdeaUser3 = require('./img/ego/business-idea-user-3.svg');
const egoProgrammingTyping = require('./img/ego/programming-typing.svg');
const egoPackageTrolley4 = require('./img/ego/package-trolley-4.svg');
const egoBusinessHandshakeDeal = require('./img/ego/business-handshake-deal.svg');

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
          <div className='white-division overview'>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    <h1 className='title on-light line-separated'>A stuck industry</h1>
                    <p className='description'>As time goes one, new technologies appear and whole industries are reshaped.
                    This time, travel and hospitality business could be on the brink of being rethink from scratch.
                    As of today, all online travel agencies are having hard time knowing what assets are available in each hotel around the globe.
                    Private companies own this kind of data and they are asking big bucks to access it.
                    In the end it’s not really the online travel agency who’s paying them, it’s the users who’s only trying to travel and every hotel owners who’s only trying to find a new client.
                    That information should be available to everyone at low cost or even at no cost at all.</p>
                  </div>
                  <div className='col-6'>
                    <img src={egoLab} />
                  </div>
                </div>
              </div>
            </div>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    <img src={egoLaunch} />
                  </div>
                  <div className='col-6'>
                    <h1 className='title on-light line-separated'>Becoming independant</h1>
                    <p className='description'>The gap between users and hotel’s assets can now be bridged.
                    Every room, corporate event venue and even bed could now act as a sole entity and keep their own information in a decentralized manner.
                    They are now considered smart assets who knows their own availabilities, prices and metadata information based on how they are programmed.
                    This creates a whole new ecosystem without unnecessary third-parties that was adding friction along the process.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    <h1 className='title on-light line-separated'>The Corner Stone</h1>
                    <p className='description'>Blockchain, that’s what allows us to give birth to this project.
                    This decentralized structure will be the backbone of latude.
                    By embracing this new technology, we’ll be able to provide our users the lowest price and for hotels, greater margins.
                    By ditching third-parties, 0 commissions now become a reality.</p>
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
                  <div className='col-8'>
                    <h1 className='title on-light line-separated'>Read our whitepaper</h1>
                    <p className='description description-center'>This whitepaper covers up every technical hurdle that we’ll need to resolve.
                    Those are all achievable within a respectable time frame.
                    It is going to be updated frequently.</p>
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
                  <div className='col-8'>
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
                  <div className='col-8'>
                    <h1 className='title on-light line-separated'>Timeline</h1>
                    <p className='description on-light'>We’ve got a tough road ahead to hit the mainstream but we’ve got to start somewhere and little by little climb that ladder to provide every user a decent technology that totally eclipse all current procedure and process.
                    Here’s where we’ve been and what are our future goals.
                    Stay tune, this will be updated.</p>
                  </div>
                  <div className='col-2' />
                </div>
                <div className='row'>
                  <div className='col-3 line-division line-division-after'>
                    <div className='line-event'>
                      <img className='icon' src={egoBusinessIdeaUser3} />
                    </div>
                  </div>
                  <div className='col-9'>
                    <h1 className='title-2 on-light'>October 2017: Proof of concept</h1>
                    <p className='description description-left on-light'>By gathering information about current industry and players, we did conceive, that using the blockchain for this kind of application was feasible and necessary.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-3 line-division line-division-after'>
                    <div className='line-event'>
                      <img className='icon' src={egoProgrammingTyping} />
                    </div>
                  </div>
                  <div className='col-9'>
                    <h1 className='title-2 on-light'>November 2017: First line of code is written</h1>
                    <p className='description description-left on-light'>The first official project is in progress.
                    The initial module that we were working on is the platform for hotels and asset management.
                    Giving hotels, the possibility to interact with the blockchain and add their assets publicly was a good starting point.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-3 line-division line-division-after'>
                    <div className='line-event'>
                      <img className='icon' src={egoPackageTrolley4} />
                    </div>
                  </div>
                  <div className='col-9'>
                    <h1 className='title-2 on-light'>January 2018: Alpha release</h1>
                    <p className='description description-left on-light'>A global solution will be available on the RinkeBy network.
                    You’ll be able to book your “stay” onto our web application and navigate our service easily.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-3 line-division'>
                    <div className='line-event'>
                      <img className='icon' src={egoBusinessHandshakeDeal} />
                    </div>
                  </div>
                  <div className='col-9'>
                    <h1 className='title-2 on-light'>March 2018: Hotel partnerships</h1>
                    <p className='description description-left on-light'>Yeah first major hotel partnerships.
                    We’ve got to start somewhere.
                    At first, they are going to be gated to keep control.
                    Once smooth sailing is achieved, all in every hotel or property will be able to add their own assets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='dashed-division'>
            <div className='centered-division'>
              <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    <h1 className='title on-light line-separated'>Wanna help</h1>
                    <p className='description on-light'>If by any mean you find this project interesting, awesome, futuristic, nice and you would like to give us a hand, we can make something happen.
                    This project is not going to build by himself, we always need help!</p>
                    <Button
                      text='Get in touch'
                      icon={egoLogout1}
                      action={this.whitepaperAction}
                    />
                  </div>
                  <div className='col-6'>
                    <img src={egoStandingDesk} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer blue-division'>
            <div className='centered-division'>
              <p className='on-dark'>All rights reserved. latude. inc.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;