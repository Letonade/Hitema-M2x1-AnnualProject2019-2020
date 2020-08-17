import React, { Component }	from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import Navbar                 from '../../components/Common/Navbar/Navbar'
import Carousel               from 'react-bootstrap/Carousel'

import Slider1                from '../../assets/img/banner/WarhammerBanner.png'
import Slider2                from '../../assets/img/banner/StarfinderBanner.png'

class Home extends Component {

	// componentDidMount() {
		
	// }

 render(){
  return (
      <div className="Home">
    <Navbar/>

    <main className="main-container">

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
              <h3></h3>
              <h2>Light you'r star.</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>

      <div className="col-12">
        <div className="divider text-uppercase fw-500">Le powerpoint</div>
      </div>

      <div className="col-12 text-center">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRz5TdFn8ZbkxBim2w08-DJM-IeI7_37V3T9c5psCv8_lwx-SWJwL07TPDjXmft1A/embed?start=true&loop=true&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>

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

