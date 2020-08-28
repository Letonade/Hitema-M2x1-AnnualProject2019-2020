import React, { Component }	from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import Navbar                 from '../../components/Common/Navbar/Navbar'
import Carousel               from 'react-bootstrap/Carousel'

import Slider1                from '../../assets/img/banner/WarhammerBanner.png'
import Slider2                from '../../assets/img/banner/StarfinderBanner.png'

import UserService          from '../../services/user.service';

class Home extends Component {

  state = {
    img : {
      image: {
        "name": 6,
        "value": "data:image/jpeg;base64,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"
      }
    },
    user :{

    }
  }

  async TestFunc(){

    console.log('LANCEMENT...');
    let response = await UserService.addAvatar(this.state.img);
    if (response.ok) {
      const json = await response.json();
      console.log('EFFICIENT TEST !');
      console.log(json);
    }else{
      console.log('ERROR TEST SUBJECT !');
    }
  }

  async TestFunc1(){
    console.log('LANCEMENT...TestFunc1');
    let response = await UserService.getProfil();
    if (response.ok) {
      const json = await response.json();
    console.log('EFFICIENT TEST ! TestFunc1');
      console.log(json);
      this.state.user = json.data;
    }else{
    console.log('ERROR TEST SUBJECT ! TestFunc1');
    }

  }
  async TestFunc2(){
    console.log('LANCEMENT...TestFunc2');
    console.log('EFFICIENT TEST ! TestFunc2');
    console.log('ERROR TEST SUBJECT ! TestFunc2');
  }
  async TestFunc3(){
    console.log('LANCEMENT...TestFunc3');
    console.log('EFFICIENT TEST ! TestFunc3');
    console.log('ERROR TEST SUBJECT ! TestFunc3');
  }
  async TestFunc4(){
    console.log('LANCEMENT...TestFunc4');
    console.log('EFFICIENT TEST ! TestFunc4');
    console.log('ERROR TEST SUBJECT ! TestFunc4');
  }
  async TestFunc5(){
    console.log('LANCEMENT...TestFunc5');
    console.log('EFFICIENT TEST ! TestFunc5');
    console.log('ERROR TEST SUBJECT ! TestFunc5');
  }
  async TestFunc6(){
    console.log('LANCEMENT...TestFunc6');
    console.log('EFFICIENT TEST ! TestFunc6');
    console.log('ERROR TEST SUBJECT ! TestFunc6');
  }
  async TestFunc7(){
    console.log('LANCEMENT...TestFunc7');
    console.log('EFFICIENT TEST ! TestFunc7');
    console.log('ERROR TEST SUBJECT ! TestFunc7');
  }
  async TestFunc8(){
    console.log('LANCEMENT...TestFunc8');
    console.log('EFFICIENT TEST ! TestFunc8');
    console.log('ERROR TEST SUBJECT ! TestFunc8');
  }
  async TestFunc9(){
    console.log('LANCEMENT...TestFunc9');
    console.log('EFFICIENT TEST ! TestFunc9');
    console.log('ERROR TEST SUBJECT ! TestFunc9');
  }
  async TestFunc10(){
    console.log('LANCEMENT...TestFunc10');
    console.log('EFFICIENT TEST ! TestFunc10');
    console.log('ERROR TEST SUBJECT ! TestFunc10');
  }
  async TestFunc11(){
    console.log('LANCEMENT...TestFunc11');
    console.log('EFFICIENT TEST ! TestFunc11');
    console.log('ERROR TEST SUBJECT ! TestFunc11');
  }
  async TestFunc12(){
    console.log('LANCEMENT...TestFunc12');
    console.log('EFFICIENT TEST ! TestFunc12');
    console.log('ERROR TEST SUBJECT ! TestFunc12');
  }
	// componentDidMount() {
		
	// }

 render(){
  return (
      <div className="Home">
    <Navbar/>

    <main className="main-container">

    <div className="card">
      <div className="row">
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-danger w-200px" 
            href="# " onClick={() => {console.log(this.state)}}>
              State
          </a>
        </div>
        <div className="col-md-4 text-center">
          <h6 className="h6 text-secondary pt-1">ZONE BÊTA</h6>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc()}}>
              TestButton
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc1()}}>
              TestButton 1
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc2()}}>
              TestButton 2
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc3()}}>
              TestButton 3
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc4()}}>
              TestButton 4
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc5()}}>
              TestButton 5
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc6()}}>
              TestButton 6
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc7()}}>
              TestButton 7
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc8()}}>
              TestButton 8
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc9()}}>
              TestButton 9
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc10()}}>
              TestButton 10
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc11()}}>
              TestButton 11
          </a>
        </div>
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-warning w-200px" 
            href="# " onClick={() => {this.TestFunc12()}}>
              TestButton 12
          </a>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="row">
        <div className="col-md-4 text-center">
          <img src={this.state.img.image.value} />
        </div>
        <div className="col-md-4 text-center">
          {this.state.img.image.name}
        </div>
        <div className="col-md-4 text-center">
          {this.state.img.image.name}
        </div>
      </div>
    </div>
      

      <div className="main-content">
        <div className="card">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Slider1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Warhammer JDR 4eme Edition</h3>
                <p>Fight with brothers !</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Slider2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h2>Light you'r star.</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="col-12">
        <div className="divider text-uppercase fw-500">Le powerpoint</div>
      </div>
{/*
      <div className="col-12 text-center">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRz5TdFn8ZbkxBim2w08-DJM-IeI7_37V3T9c5psCv8_lwx-SWJwL07TPDjXmft1A/embed?start=true&loop=true&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>*/}

      <div className="col-12">
        <div className="divider text-uppercase fw-500">Some Stats</div>
      </div>

      <div className="main-content">
        <div className="row">

          <div className="col-md-4">
            <div className="card card-body">
                <div className="text-center">
                  <span className="">258 306 Parties en cours</span><br/>
                  <span>
                    <i className="ti-angle-up text-success"></i>
                    <span className="fs-18 ml-1">27%</span>
                  </span>
                </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-body">
                <div className="text-center">
                  <span className="">258 306 Parties en cours</span><br/>
                  <span>
                    <i className="ti-angle-up text-success"></i>
                    <span className="fs-18 ml-1">27%</span>
                  </span>
                </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-body">
                <div className="text-center">
                  <span className="">28 631 Parties en cours</span><br/>
                  <span>
                    <i className="ti-angle-up text-success"></i>
                    <span className="fs-18 ml-1">27%</span>
                  </span>
                </div>
            </div>
          </div>

      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title"><strong>Earnings</strong></h5>
            <a className="btn btn-xs btn-secondary" href="../widget/chart.html">More Charts</a>
          </div>

          <div className="card-body">
            <ul className="list-inline text-center gap-items-4 mb-30">
              <li className="list-inline-item">
                <span className="badge badge-lg badge-dot mr-1" style={{"backgroundColor": "#b1bccb"}}></span>
                <span>Advertising</span>
              </li>
              <li className="list-inline-item">
                <span className="badge badge-lg badge-dot mr-1" style={{"backgroundColor": "#01c4cc"}}></span>
                <span>Hosting</span>
              </li>
            </ul>

            <canvas id="chart-js-2" height="130" data-provide="chartjs"></canvas>
          </div>
        </div>
      </div>








      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title"><strong>Top</strong> Advertisers</h5>

            <ul className="card-controls">
              <li className="dropdown">
                <a data-toggle="dropdown" href=" #"><i className="ti-more-alt rotate-90"></i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item active" href=" #">Today</a>
                  <a className="dropdown-item" href=" #">Yesterday</a>
                  <a className="dropdown-item" href=" #">Last week</a>
                  <a className="dropdown-item" href=" #">Last month</a>
                </div>
              </li>
              <li><a className="card-btn-reload" href=" #" title="" data-provide="tooltip" data-original-title="Refresh"><i className="fa fa-circle-thin"></i></a></li>
            </ul>
          </div>

          <div className="card-body card-body">
            <p className="text-center d-none d-xl-block">We need to stop interrupting what people are and be what people are interested in. We need to stop interrupting what people are and be what people are interested in.</p>

            <div className="text-center py-20 d-none d-lg-block">
              <div data-provide="peity" data-type="donut" data-size="150" data-inner-radius="55" data-fill="#efb3e6,#ffdf7c,#b2def7">9,6,5</div>
            </div>

            <div className="text-center py-20 d-lg-none">
              <div data-provide="peity" data-type="donut" data-size="87" data-inner-radius="35" data-fill="#efb3e6,#ffdf7c,#b2def7">9,6,5</div>
            </div>

            <ul className="list-inline mb-0">
              <li className="flexbox mb-1">
                <div>
                  <span className="badge badge-dot badge-lg mr-1" style={{"backgroundColor" : "#efb3e6"}}></span>
                  <span>Google</span>
                </div>
                <div>953</div>
              </li>

              <li className="flexbox mb-1">
                <div>
                  <span className="badge badge-dot badge-lg mr-1" style={{"backgroundColor" : "#ffdf7c"}}></span>
                  <span>Facebook</span>
                </div>
                <div>813</div>
              </li>

              <li className="flexbox">
                <div>
                  <span className="badge badge-dot badge-lg mr-1" style={{"backgroundColor" : "#b2def7"}}></span>
                  <span>Twitter</span>
                </div>
                <div>369</div>
              </li>
            </ul>
          </div>
        </div>
      </div>







      <div className="col-12">
        <div className="divider text-uppercase fw-500">Social</div>
      </div>





      <div className="col-md-6 col-lg-4">
        <div className="card p-30 pt-50 text-center">
          <div>
            <a className="avatar avatar-xxl status-success mb-3" href="../page/profile.html">
              <img src="../assets/img/avatar/1.jpg" alt="..."/>
            </a>
          </div>
          <h5><a href="../page/profile.html">Maryam Amiri</a></h5>
          <p><small className="fs-13">Designer</small></p>
          <p className="text-light fs-12 mb-30">Hello everyone, I am Maryam. My designs are used in several big companies in United State and other countries.</p>
          <div className="gap-items fs-16">
            <a className="text-facebook" href=" #"><i className="fa fa-facebook"></i></a>
            <a className="text-dribbble" href=" #"><i className="fa fa-dribbble"></i></a>
            <a className="text-google" href=" #"><i className="fa fa-google"></i></a>
            <a className="text-twitter" href=" #"><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>








      <div className="col-md-6 col-lg-4">
        <div className="card">
          <h5 className="card-title"><strong>Friends</strong></h5>

          <div className="media-list media-list-sm media-list-hover media-list-divided scrollable ps-container ps-theme-default ps-active-y" style={{height: "295px"}} data-ps-id="dadac395-34e9-0117-df73-bf58e70fcf18">
            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/2.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Hossein Shams</a></h6>
                <small className="text-fader">Co-Founder</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" href=" #">Followed</a>
              </div>
            </div>


            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Maryam Amiri</a></h6>
                <small className="text-fader">Co-Founder</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" href=" #">Followed</a>
              </div>
            </div>


            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/3.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Sarah Conner</a></h6>
                <small className="text-fader">Designer</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-success w-100px" href=" #">Follow</a>
              </div>
            </div>



            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/4.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Frank Camly</a></h6>
                <small className="text-fader">CTO</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-success w-100px" href=" #">Follow</a>
              </div>
            </div>



            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/5.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Ted Erricson</a></h6>
                <small className="text-fader">Lead Developer</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" href=" #">Followed</a>
              </div>
            </div>



            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/6.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Ranian Mostalik</a></h6>
                <small className="text-fader">Senior Developer</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-success w-100px" href=" #">Follow</a>
              </div>
            </div>



            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/7.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">John Franklin</a></h6>
                <small className="text-fader">Front-end Developer</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-success w-100px" href=" #">Follow</a>
              </div>
            </div>



            <div className="media media-single">
              <a href=" #">
                <img className="avatar" src="../assets/img/avatar/8.jpg" alt="..."/>
              </a>

              <div className="media-body">
                <h6><a href=" #">Emma Larson</a></h6>
                <small className="text-fader">PHP Guru</small>
              </div>

              <div className="media-right">
                <a className="btn btn-sm btn-bold btn-round btn-success w-100px" href=" #">Follow</a>
              </div>
            </div>
            <div className="ps-scrollbar-x-rail" style={{left: "0px", bottom: "0px"}}>
              <div className="ps-scrollbar-x" tabIndex="0" style={{left: "0px", width: "0px"}}>
              </div>
            </div>
            <div className="ps-scrollbar-y-rail" style={{"top": "0px", height: "295px", right: "2px"}}>
              <div className="ps-scrollbar-y" tabIndex="0" style={{"top": "0px", height: "108px"}}>
              </div>
            </div>
          </div>

          <div className="text-center bt-1 border-light p-2">
            <a className="text-default text-uppercase d-block fs-10 fw-500 ls-1" href=" #">Invite Friends</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 d-none d-lg-block">
        <div className="flexbox flex-justified text-center bg-white mb-15">
          <div className="no-shrink py-30">
            <span className="ti-facebook fs-40" style={{color: "#3b5998"}}></span>
          </div>

          <div className="py-30 bg-lighter">
            <div className="fs-30">+100</div>
            <span>Likes</span>
          </div>
        </div>



        <div className="flexbox flex-justified text-center bg-white mb-15">
          <div className="no-shrink py-30">
            <span className="ti-twitter fs-40" style={{color: "#00aced"}}></span>
          </div>

          <div className="py-30 bg-lighter">
            <div className="fs-30">+99</div>
            <span>Followers</span>
          </div>
        </div>



        <div className="flexbox flex-justified text-center bg-white">
          <div className="no-shrink py-30">
            <span className="ti-dribbble fs-40" style={{color: "#ea4c89"}}></span>
          </div>

          <div className="py-30 bg-lighter">
            <div className="fs-30">+45</div>
            <span>Shots</span>
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="divider text-uppercase fw-500">Apps</div>
      </div>




      <div className="col-md-6">
        <div className="card card-bordered">
          <div className="card-header">
            <h4 className="card-title"><strong>Chat</strong></h4>
            <a className="btn btn-xs btn-secondary" href="../page-app/chat.html">Chat App</a>
          </div>


          <div className="scrollable ps-container ps-theme-default ps-active-y" id="chat-content" style={{height:"400px"}} data-provide="emoji" data-ps-id="1f813844-7691-d16d-d146-56b47bb7ab5f">
            <div className="media media-chat">
              <img className="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
              <div className="media-body">
                <p>Hi</p>
                <p>How are you ...???</p>
                <p>What are you doing tomorrow?<br/>Would you like to get out of the town for a while?</p>
                <p className="meta"><time dateTime="2018">23:58</time></p>
              </div>
            </div>

            <div className="media media-meta-day">Today</div>

            <div className="media media-chat media-chat-reverse">
              <div className="media-body">
                <p>Hiii, I'm good.</p>
                <p>How are you doing?</p>
                <p>Long time no see!</p>
                <p className="meta"><time dateTime="2018">00:06</time></p>
              </div>
            </div>

            <div className="media media-chat">
              <img className="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
              <div className="media-body">
                <p>Yeah</p>
                <p>We were out of country for a vacation. We visited several beautiful countries and made a lot of memmories. :stuck_out_tongue_winking_eye: :stuck_out_tongue_winking_eye:</p>
                <p className="meta"><time dateTime="2018">00:07</time></p>
              </div>
            </div>

            <div className="media media-chat media-chat-reverse">
              <div className="media-body">
                <p>That's awesome!</p>
                <p>You should tell me everything with all small details. I'm so curious to hear your stories.</p>
                <p>Did you take pictures?</p>
                <p className="meta"><time dateTime="2018">00:09</time></p>
              </div>
            </div>

            <div className="media media-chat">
              <img className="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
              <div className="media-body">
                <p>We took a loooot. Here is some of them, I'll show you the rest once we meet :wink:</p>
                <p className="row gap-1" data-provide="photoswipe">
                  <a className="col-4 d-inline-block" href=" #"><img src="../assets/img/gallery/thumb-sm/8.jpg" alt="..."/></a>
                  <a className="col-4 d-inline-block" href=" #"><img src="../assets/img/gallery/thumb-sm/11.jpg" alt="..."/></a>
                  <a className="col-4 d-inline-block" href=" #"><img src="../assets/img/gallery/thumb-sm/7.jpg" alt="..."/></a>
                </p>
                <p className="meta"><time dateTime="2018">00:10</time></p>
              </div>
            </div>

            <div className="media media-chat media-chat-reverse">
              <div className="media-body">
                <p>These places are fantastic. Wish I could join you guys :disappointed: :disappointed:</p>
                <p className="meta"><time dateTime="2018">00:10</time></p>
              </div>
            </div>

            <div className="media media-chat">
              <img className="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
              <div className="media-body">
                <p>You can actually. We are planning our next vacation for new year holidays :wink:</p>
                <p className="meta"><time dateTime="2018">00:12</time></p>
              </div>
            </div>

            <div className="media media-chat media-chat-reverse">
              <div className="media-body">
                <p>Are you serious?!! :heart_eyes:</p>
                <p className="meta"><time dateTime="2018">00:12</time></p>
              </div>
            </div>

            <div className="ps-scrollbar-x-rail" style={{left: "0px", bottom: "-270px"}}>
              <div className="ps-scrollbar-x" tabIndex="0" style={{left: "0px", width: "0px"}}>
              </div>
            </div>
            <div className="ps-scrollbar-y-rail" style={{top: "270px", height: "400px", right: "2px"}}>
              <div className="ps-scrollbar-y" tabIndex="0" style={{top: "73px", height: "108px"}}>
              </div>
            </div>
          </div>

          <div className="publisher bt-1 border-light">
            <img className="avatar avatar-xs" src="../assets/img/avatar/2.jpg" alt="..."/>
            <input className="publisher-input" type="text" placeholder="Write something"/>
            <span className="publisher-btn file-group">
              <i className="fa fa-paperclip file-browser"></i>
              <input type="file"/>
            </span>
            <a className="publisher-btn" href=" #"><i className="fa fa-smile-o"></i></a>
            <a className="publisher-btn text-info" href=" #"><i className="fa fa-paper-plane"></i></a>
          </div>

        </div>
      </div>

      <div className="col-md-6">
        <div className="card card-bordered">
          <h4 className="card-title"><strong>Todo list</strong></h4>

          <div className="media-list media-list-hover" data-provide="selectall">

            <header className="media media-single media-list-header">
              <div className="custom-control custom-control-lg custom-checkbox pl-4">
                <input type="checkbox" className="custom-control-input"/>
                <label className="custom-control-label"></label>
              </div>

              <div className="lookup lookup-sm flex-grow-1">
                <input type="text" placeholder="Search..." data-provide="media-search"/>
              </div>
            </header>

            <div className="media-list-body scrollable ps-container ps-theme-default" data-provide="sortable" data-sortable-handle=".sortable-dot" style={{height:"344px"}} data-ps-id="4b6ee4e3-5c77-dd34-a741-ffe7600bcfd9">
              <div className="media media-single bl-3 border-danger">
                <span className="sortable-dot"></span>
                <div className="custom-control custom-control-lg custom-checkbox flex-grow-1">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label strike-on-check">Schedule meeting with Bob</label>
                </div>
                <a className="media-action" href=" #" data-provide="tooltip" title="" data-original-title="Edit"><i className="ti-pencil"></i></a>
                <a className="media-action hover-danger" href=" #" data-provide="tooltip" title="" data-original-title="Delete"><i className="ti-close"></i></a>
              </div>

              <div className="media media-single">
                <span className="sortable-dot"></span>
                <div className="custom-control custom-control-lg custom-checkbox flex-grow-1">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label strike-on-check">Take children from school</label>
                </div>
                <a className="media-action" href=" #" data-provide="tooltip" title="" data-original-title="Edit"><i className="ti-pencil"></i></a>
                <a className="media-action hover-danger" href=" #" data-provide="tooltip" title="" data-original-title="Delete"><i className="ti-close"></i></a>
              </div>

              <div className="media media-single">
                <span className="sortable-dot"></span>
                <div className="custom-control custom-control-lg custom-checkbox flex-grow-1">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label strike-on-check">Final design delivery</label>
                </div>
                <a className="media-action" href=" #" data-provide="tooltip" title="" data-original-title="Edit"><i className="ti-pencil"></i></a>
                <a className="media-action hover-danger" href=" #" data-provide="tooltip" title="" data-original-title="Delete"><i className="ti-close"></i></a>
              </div>

              <div className="media media-single bl-3 border-warning">
                <span className="sortable-dot"></span>
                <div className="custom-control custom-control-lg custom-checkbox flex-grow-1">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label strike-on-check">Watch GOT - Episode 6</label>
                </div>
                <a className="media-action" href=" #" data-provide="tooltip" title="" data-original-title="Edit"><i className="ti-pencil"></i></a>
                <a className="media-action hover-danger" href=" #" data-provide="tooltip" title="" data-original-title="Delete"><i className="ti-close"></i></a>
              </div>

              <div className="media media-single">
                <span className="sortable-dot"></span>
                <div className="custom-control custom-control-lg custom-checkbox flex-grow-1">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label strike-on-check">Read an article</label>
                </div>
                <a className="media-action" href=" #" data-provide="tooltip" title="" data-original-title="Edit"><i className="ti-pencil"></i></a>
                <a className="media-action hover-danger" href=" #" data-provide="tooltip" title="" data-original-title="Delete"><i className="ti-close"></i></a>
              </div>

              <div className="media media-single bl-3 border-danger">
                <span className="sortable-dot"></span>
                <div className="custom-control custom-control-lg custom-checkbox flex-grow-1">
                  <input type="checkbox" className="custom-control-input"/>
                  <label className="custom-control-label strike-on-check">Begin promotional phase</label>
                </div>
                <a className="media-action" href=" #" data-provide="tooltip" title="" data-original-title="Edit"><i className="ti-pencil"></i></a>
                <a className="media-action hover-danger" href=" #" data-provide="tooltip" title="" data-original-title="Delete"><i className="ti-close"></i></a>
              </div>

              <div className="ps-scrollbar-x-rail" style={{left: "0px", bottom: "0px"}}>
                <div className="ps-scrollbar-x" tabIndex="0" style={{left: "0px", width: "0px"}}>
                </div>
              </div>
              <div className="ps-scrollbar-y-rail" style={{top: "0px", right: "2px"}}>
                <div className="ps-scrollbar-y" tabIndex="0" style={{top: "0px", height: "0px"}}>
                </div>
              </div>
            </div>

          </div>

          <div className="publisher bt-1 border-light">
            <input className="publisher-input" type="text" placeholder="Add new task"/>
            <a className="btn btn-sm btn-secondary" href=" #"><i className="fa fa-paper-plane"></i></a>
          </div>

        </div>
      </div>



    </div>
  </div>


  <footer className="site-footer">
    <div className="row">
      <div className="col-md-6">
        <p className="text-center text-md-left">Copyright © 2019 <a href="http://thetheme.io/theadmin">TheAdmin</a>. All rights reserved.</p>
      </div>

      <div className="col-md-6">
        <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
          <li className="nav-item">
            <a className="nav-link" href="../help/articles.html">Documentation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../help/faq.html">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://themeforest.net/item/theadmin-responsive-bootstrap-4-admin-dashboard-webapp-template/20475359?license=regular&amp;open_purchase_for_item_id=20475359&amp;purchasable=source&amp;ref=thethemeio">Purchase Now</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>


  </main>
  </div>
  );
}
}

export default withRouter(Home)

