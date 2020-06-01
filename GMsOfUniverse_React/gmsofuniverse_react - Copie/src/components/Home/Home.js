import React, { Component }	from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import Navbar                from '../../components/Common/Navbar/Navbar'

import ImgTEst                from '../../assets/img/banner/RotRL_Banner_2.jpg'

class Home extends Component {

	// componentDidMount() {
		
	// }

  	render(){
	  	return (
		    <div className="Home">
                <Navbar/>

<main class="main-container">

      <div class="main-content">
        <div class="row">


        <div class="col-md-12">
            <div class="d-none d-md-block">
              <div class="card">
                <div class="row no-gutters">
                
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src="..." alt="First slide"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Second slide"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Third slide"/>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>


          <div class="col-md-12">
            <div class="d-none d-md-block">
            <div class="card">
              <div class="row no-gutters">
                {/*<a class="col-8 bg-img" style={{backgroundImage : "url("+ImgTEst+")"}} href="../widget/blog.html"></a>*/}
                <div class="col-8">
                 <img class="img-responsive" src={ImgTEst} style={{width:"100%", height:"100%"}}/>
                </div>
                <div class="col-4">
                  <div class="card-body">
                    <h5><a class="hover-primary text-uppercase fs-14 fw-500 ls-1" href="../widget/blog.html">Quick start - jump into writing code</a></h5>
                    <hr class="w-50px ml-0 bt-2 border-pink hr-sm"/>
                    <p>Holisticly maximize team building via next-generation resources. Enthusiastically promote team driven customer service and error-free solutions. Dynamically myocardinate vertical leadership for synergistic "outside the box" thinking. Efficiently extend global. Competently leverage existing one-to-one schemas after value-added opportunities. Rapidiously drive worldwide mindshare rather than vertical customer service. Globally coordinate adaptive materials before clicks-and-mortar supply chains.</p>
                    <div class="flexbox flex-items-middle mt-30">
                      <a href="../page/profile.html">
                        <img class="avatar avatar-sm" src="../assets/img/avatar/2.jpg" alt="..."/>
                        <span class="text-default fw-400 ml-2">Hos Shams</span>
                      </a>
                      <a href="#">
                        <i class="fas fa-heart text-danger fs-11"></i>
                        <span class="fs-11 text-fade ml-1">128</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-body">
              <div class="flexbox">
                <div data-provide="sparkline" data-width="100" data-fill-color="false" data-line-width="2">1,4,3,7,6,4,8,9,6,8,12</div>
                <div class="text-right">
                  <span class="fw-400">New Users</span><br/>
                  <span>
                    <i class="ti-angle-up text-success"></i>
                    <span class="fs-18 ml-1">113</span>
                  </span>
                </div>
              </div>
            </div>
          </div>



          <div class="col-md-4">
            <div class="card card-body">
              <div class="flexbox">
                <div data-provide="sparkline" data-type="bar" data-bar-color="#f2a654">1,4,7,6,4,8,6,12</div>
                <div class="text-right">
                  <span class="fw-400">Monthly Sale</span><br/>
                  <span>
                    <i class="ti-angle-up text-success"></i>
                    <span class="fs-18 ml-1">%80</span>
                  </span>
                </div>
              </div>
            </div>
          </div>



          <div class="col-md-4">
            <div class="card card-body">
              <div class="flexbox">
                <div data-provide="sparkline" data-type="discrete" data-width="50" data-line-color="#926dde">1,4,3,7,6,4,8,9,6,8,12</div>
                <div class="text-right">
                  <span class="fw-400">Impressions</span><br/>
                  <span>
                    <i class="ti-angle-up text-success"></i>
                    <span class="fs-18 ml-1">%80</span>
                  </span>
                </div>
              </div>
            </div>
          </div>









          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title"><strong>Earnings</strong></h5>
                <a class="btn btn-xs btn-secondary" href="../widget/chart.html">More Charts</a>
              </div>

              <div class="card-body">
                <ul class="list-inline text-center gap-items-4 mb-30">
                  <li class="list-inline-item">
                    <span class="badge badge-lg badge-dot mr-1" style={{"background-color": "#b1bccb"}}></span>
                    <span>Advertising</span>
                  </li>
                  <li class="list-inline-item">
                    <span class="badge badge-lg badge-dot mr-1" style={{"background-color": "#01c4cc"}}></span>
                    <span>Hosting</span>
                  </li>
                </ul>

                <canvas id="chart-js-2" height="130" data-provide="chartjs"></canvas>
              </div>
            </div>
          </div>








          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title"><strong>Top</strong> Advertisers</h5>

                <ul class="card-controls">
                  <li class="dropdown">
                    <a data-toggle="dropdown" href="#"><i class="ti-more-alt rotate-90"></i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item active" href="#">Today</a>
                      <a class="dropdown-item" href="#">Yesterday</a>
                      <a class="dropdown-item" href="#">Last week</a>
                      <a class="dropdown-item" href="#">Last month</a>
                    </div>
                  </li>
                  <li><a class="card-btn-reload" href="#" title="" data-provide="tooltip" data-original-title="Refresh"><i class="fa fa-circle-thin"></i></a></li>
                </ul>
              </div>

              <div class="card-body card-body">
                <p class="text-center d-none d-xl-block">We need to stop interrupting what people are and be what people are interested in. We need to stop interrupting what people are and be what people are interested in.</p>

                <div class="text-center py-20 d-none d-lg-block">
                  <div data-provide="peity" data-type="donut" data-size="150" data-inner-radius="55" data-fill="#efb3e6,#ffdf7c,#b2def7">9,6,5</div>
                </div>

                <div class="text-center py-20 d-lg-none">
                  <div data-provide="peity" data-type="donut" data-size="87" data-inner-radius="35" data-fill="#efb3e6,#ffdf7c,#b2def7">9,6,5</div>
                </div>

                <br/>

                <ul class="list-inline mb-0">
                  <li class="flexbox mb-1">
                    <div>
                      <span class="badge badge-dot badge-lg mr-1" style={{"background-color" : "#efb3e6"}}></span>
                      <span>Google</span>
                    </div>
                    <div>953</div>
                  </li>

                  <li class="flexbox mb-1">
                    <div>
                      <span class="badge badge-dot badge-lg mr-1" style={{"background-color" : "#ffdf7c"}}></span>
                      <span>Facebook</span>
                    </div>
                    <div>813</div>
                  </li>

                  <li class="flexbox">
                    <div>
                      <span class="badge badge-dot badge-lg mr-1" style={{"background-color" : "#b2def7"}}></span>
                      <span>Twitter</span>
                    </div>
                    <div>369</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>







          <div class="col-12">
            <div class="divider text-uppercase fw-500">Social</div>
          </div>





          <div class="col-md-6 col-lg-4">
            <div class="card p-30 pt-50 text-center">
              <div>
                <a class="avatar avatar-xxl status-success mb-3" href="../page/profile.html">
                  <img src="../assets/img/avatar/1.jpg" alt="..."/>
                </a>
              </div>
              <h5><a href="../page/profile.html">Maryam Amiri</a></h5>
              <p><small class="fs-13">Designer</small></p>
              <p class="text-light fs-12 mb-30">Hello everyone, I am Maryam. My designs are used in several big companies in United State and other countries.</p>
              <div class="gap-items fs-16">
                <a class="text-facebook" href="#"><i class="fa fa-facebook"></i></a>
                <a class="text-dribbble" href="#"><i class="fa fa-dribbble"></i></a>
                <a class="text-google" href="#"><i class="fa fa-google"></i></a>
                <a class="text-twitter" href="#"><i class="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>








          <div class="col-md-6 col-lg-4">
            <div class="card">
              <h5 class="card-title"><strong>Friends</strong></h5>

              <div class="media-list media-list-sm media-list-hover media-list-divided scrollable ps-container ps-theme-default ps-active-y" style={{height: "295px"}} data-ps-id="dadac395-34e9-0117-df73-bf58e70fcf18">
                <div class="media media-single">
                  <a href="#">
                    <img class="avatar" src="../assets/img/avatar/2.jpg" alt="..."/>
                  </a>

                  <div class="media-body">
                    <h6><a href="#">Hossein Shams</a></h6>
                    <small class="text-fader">Co-Founder</small>
                  </div>

                  <div class="media-right">
                    <a class="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" href="#">Followed</a>
                  </div>
                </div>


                <div class="media media-single">
                  <a href="#">
                    <img class="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
                  </a>

                  <div class="media-body">
                    <h6><a href="#">Maryam Amiri</a></h6>
                    <small class="text-fader">Co-Founder</small>
                  </div>

                  <div class="media-right">
                    <a class="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" href="#">Followed</a>
                  </div>
                </div>


                <div class="media media-single">
                  <a href="#">
                    <img class="avatar" src="../assets/img/avatar/3.jpg" alt="..."/>
                  </a>

                  <div class="media-body">
                    <h6><a href="#">Sarah Conner</a></h6>
                    <small class="text-fader">Designer</small>
                  </div>

                  <div class="media-right">
                    <a class="btn btn-sm btn-bold btn-round btn-success w-100px" href="#">Follow</a>
                  </div>
                </div>



                <div class="media media-single">
                  <a href="#">
                    <img class="avatar" src="../assets/img/avatar/4.jpg" alt="..."/>
                  </a>

                  <div class="media-body">
                    <h6><a href="#">Frank Camly</a></h6>
                    <small class="text-fader">CTO</small>
                  </div>

                  <div class="media-right">
                    <a class="btn btn-sm btn-bold btn-round btn-success w-100px" href="#">Follow</a>
                  </div>
                </div>



                <div class="media media-single">
                  <a href="#">
                    <img class="avatar" src="../assets/img/avatar/5.jpg" alt="..."/>
                  </a>

                  <div class="media-body">
                    <h6><a href="#">Ted Erricson</a></h6>
                    <small class="text-fader">Lead Developer</small>
                  </div>

                  <div class="media-right">
                    <a class="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" href="#">Followed</a>
                  </div>
                </div>



                <div class="media media-single">
                  <a href="#">
                    <img class="avatar" src="../assets/img/avatar/6.jpg" alt="..."/>
                  </a>

                  <div class="media-body">
                    <h6><a href="#">Ranian Mostalik</a></h6>
                    <small class="text-fader">Senior Developer</small>
                  </div>

                  <div class="media-right">
                    <a class="btn btn-sm btn-bold btn-round btn-success w-100px" href="#">Follow</a>
                  </div>
                </div>



                <div class="media media-single">
                  <a href="#">
                    <img class="avatar" src="../assets/img/avatar/7.jpg" alt="..."/>
                  </a>

                  <div class="media-body">
                    <h6><a href="#">John Franklin</a></h6>
                    <small class="text-fader">Front-end Developer</small>
                  </div>

                  <div class="media-right">
                    <a class="btn btn-sm btn-bold btn-round btn-success w-100px" href="#">Follow</a>
                  </div>
                </div>



                <div class="media media-single">
                  <a href="#">
                    <img class="avatar" src="../assets/img/avatar/8.jpg" alt="..."/>
                  </a>

                  <div class="media-body">
                    <h6><a href="#">Emma Larson</a></h6>
                    <small class="text-fader">PHP Guru</small>
                  </div>

                  <div class="media-right">
                    <a class="btn btn-sm btn-bold btn-round btn-success w-100px" href="#">Follow</a>
                  </div>
                </div>
                <div class="ps-scrollbar-x-rail" style={{left: "0px", bottom: "0px"}}>
                  <div class="ps-scrollbar-x" tabindex="0" style={{left: "0px", width: "0px"}}>
                  </div>
                </div>
                <div class="ps-scrollbar-y-rail" style={{"top": "0px", height: "295px", right: "2px"}}>
                  <div class="ps-scrollbar-y" tabindex="0" style={{"top": "0px", height: "108px"}}>
                  </div>
                </div>
            </div>

              <div class="text-center bt-1 border-light p-2">
                <a class="text-default text-uppercase d-block fs-10 fw-500 ls-1" href="#">Invite Friends</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="flexbox flex-justified text-center bg-white mb-15">
              <div class="no-shrink py-30">
                <span class="ti-facebook fs-40" style={{color: "#3b5998"}}></span>
              </div>

              <div class="py-30 bg-lighter">
                <div class="fs-30">+100</div>
                <span>Likes</span>
              </div>
            </div>



            <div class="flexbox flex-justified text-center bg-white mb-15">
              <div class="no-shrink py-30">
                <span class="ti-twitter fs-40" style={{color: "#00aced"}}></span>
              </div>

              <div class="py-30 bg-lighter">
                <div class="fs-30">+99</div>
                <span>Followers</span>
              </div>
            </div>



            <div class="flexbox flex-justified text-center bg-white">
              <div class="no-shrink py-30">
                <span class="ti-dribbble fs-40" style={{color: "#ea4c89"}}></span>
              </div>

              <div class="py-30 bg-lighter">
                <div class="fs-30">+45</div>
                <span>Shots</span>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="divider text-uppercase fw-500">Apps</div>
          </div>




          <div class="col-md-6">
            <div class="card card-bordered">
              <div class="card-header">
                <h4 class="card-title"><strong>Chat</strong></h4>
                <a class="btn btn-xs btn-secondary" href="../page-app/chat.html">Chat App</a>
              </div>


              <div class="scrollable ps-container ps-theme-default ps-active-y" id="chat-content" style={{height:"400px"}} data-provide="emoji" data-ps-id="1f813844-7691-d16d-d146-56b47bb7ab5f">
                <div class="media media-chat">
                  <img class="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
                  <div class="media-body">
                    <p>Hi</p>
                    <p>How are you ...???</p>
                    <p>What are you doing tomorrow?<br/>Would you like to get out of the town for a while?</p>
                    <p class="meta"><time datetime="2018">23:58</time></p>
                  </div>
                </div>

                <div class="media media-meta-day">Today</div>

                <div class="media media-chat media-chat-reverse">
                  <div class="media-body">
                    <p>Hiii, I'm good.</p>
                    <p>How are you doing?</p>
                    <p>Long time no see!</p>
                    <p class="meta"><time datetime="2018">00:06</time></p>
                  </div>
                </div>

                <div class="media media-chat">
                  <img class="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
                  <div class="media-body">
                    <p>Yeah</p>
                    <p>We were out of country for a vacation. We visited several beautiful countries and made a lot of memmories. :stuck_out_tongue_winking_eye: :stuck_out_tongue_winking_eye:</p>
                    <p class="meta"><time datetime="2018">00:07</time></p>
                  </div>
                </div>

                <div class="media media-chat media-chat-reverse">
                  <div class="media-body">
                    <p>That's awesome!</p>
                    <p>You should tell me everything with all small details. I'm so curious to hear your stories.</p>
                    <p>Did you take pictures?</p>
                    <p class="meta"><time datetime="2018">00:09</time></p>
                  </div>
                </div>

                <div class="media media-chat">
                  <img class="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
                  <div class="media-body">
                    <p>We took a loooot. Here is some of them, I'll show you the rest once we meet :wink:</p>
                    <p class="row gap-1" data-provide="photoswipe">
                      <a class="col-4 d-inline-block" href="#"><img src="../assets/img/gallery/thumb-sm/8.jpg" alt="..."/></a>
                      <a class="col-4 d-inline-block" href="#"><img src="../assets/img/gallery/thumb-sm/11.jpg" alt="..."/></a>
                      <a class="col-4 d-inline-block" href="#"><img src="../assets/img/gallery/thumb-sm/7.jpg" alt="..."/></a>
                    </p>
                    <p class="meta"><time datetime="2018">00:10</time></p>
                  </div>
                </div>

                <div class="media media-chat media-chat-reverse">
                  <div class="media-body">
                    <p>These places are fantastic. Wish I could join you guys :disappointed: :disappointed:</p>
                    <p class="meta"><time datetime="2018">00:10</time></p>
                  </div>
                </div>

                <div class="media media-chat">
                  <img class="avatar" src="../assets/img/avatar/1.jpg" alt="..."/>
                  <div class="media-body">
                    <p>You can actually. We are planning our next vacation for new year holidays :wink:</p>
                    <p class="meta"><time datetime="2018">00:12</time></p>
                  </div>
                </div>

                <div class="media media-chat media-chat-reverse">
                  <div class="media-body">
                    <p>Are you serious?!! :heart_eyes:</p>
                    <p class="meta"><time datetime="2018">00:12</time></p>
                  </div>
                </div>

              <div class="ps-scrollbar-x-rail" style={{left: "0px", bottom: "-270px"}}>
                <div class="ps-scrollbar-x" tabindex="0" style={{left: "0px", width: "0px"}}>
                </div>
              </div>
              <div class="ps-scrollbar-y-rail" style={{top: "270px", height: "400px", right: "2px"}}>
                <div class="ps-scrollbar-y" tabindex="0" style={{top: "73px", height: "108px"}}>
                </div>
              </div>
            </div>

              <div class="publisher bt-1 border-light">
                <img class="avatar avatar-xs" src="../assets/img/avatar/2.jpg" alt="..."/>
                <input class="publisher-input" type="text" placeholder="Write something"/>
                <span class="publisher-btn file-group">
                  <i class="fa fa-paperclip file-browser"></i>
                  <input type="file"/>
                </span>
                <a class="publisher-btn" href="#"><i class="fa fa-smile-o"></i></a>
                <a class="publisher-btn text-info" href=" #"><i class="fa fa-paper-plane"></i></a>
              </div>

            </div>
          </div>

          <div class="col-md-6">
            <div class="card card-bordered">
              <h4 class="card-title"><strong>Todo list</strong></h4>

              <div class="media-list media-list-hover" data-provide="selectall">

                <header class="media media-single media-list-header">
                  <div class="custom-control custom-control-lg custom-checkbox pl-4">
                    <input type="checkbox" class="custom-control-input"/>
                    <label class="custom-control-label"></label>
                  </div>

                  <div class="lookup lookup-sm flex-grow-1">
                    <input type="text" placeholder="Search..." data-provide="media-search"/>
                  </div>
                </header>

                <div class="media-list-body scrollable ps-container ps-theme-default" data-provide="sortable" data-sortable-handle=".sortable-dot" style={{height:"344px"}} data-ps-id="4b6ee4e3-5c77-dd34-a741-ffe7600bcfd9">
                  <div class="media media-single bl-3 border-danger">
                    <span class="sortable-dot"></span>
                    <div class="custom-control custom-control-lg custom-checkbox flex-grow-1">
                      <input type="checkbox" class="custom-control-input"/>
                      <label class="custom-control-label strike-on-check">Schedule meeting with Bob</label>
                    </div>
                    <a class="media-action" href="#" data-provide="tooltip" title="" data-original-title="Edit"><i class="ti-pencil"></i></a>
                    <a class="media-action hover-danger" href="#" data-provide="tooltip" title="" data-original-title="Delete"><i class="ti-close"></i></a>
                  </div>

                  <div class="media media-single">
                    <span class="sortable-dot"></span>
                    <div class="custom-control custom-control-lg custom-checkbox flex-grow-1">
                      <input type="checkbox" class="custom-control-input"/>
                      <label class="custom-control-label strike-on-check">Take children from school</label>
                    </div>
                    <a class="media-action" href="#" data-provide="tooltip" title="" data-original-title="Edit"><i class="ti-pencil"></i></a>
                    <a class="media-action hover-danger" href="#" data-provide="tooltip" title="" data-original-title="Delete"><i class="ti-close"></i></a>
                  </div>

                  <div class="media media-single">
                    <span class="sortable-dot"></span>
                    <div class="custom-control custom-control-lg custom-checkbox flex-grow-1">
                      <input type="checkbox" class="custom-control-input"/>
                      <label class="custom-control-label strike-on-check">Final design delivery</label>
                    </div>
                    <a class="media-action" href="#" data-provide="tooltip" title="" data-original-title="Edit"><i class="ti-pencil"></i></a>
                    <a class="media-action hover-danger" href="#" data-provide="tooltip" title="" data-original-title="Delete"><i class="ti-close"></i></a>
                  </div>

                  <div class="media media-single bl-3 border-warning">
                    <span class="sortable-dot"></span>
                    <div class="custom-control custom-control-lg custom-checkbox flex-grow-1">
                      <input type="checkbox" class="custom-control-input"/>
                      <label class="custom-control-label strike-on-check">Watch GOT - Episode 6</label>
                    </div>
                    <a class="media-action" href="#" data-provide="tooltip" title="" data-original-title="Edit"><i class="ti-pencil"></i></a>
                    <a class="media-action hover-danger" href="#" data-provide="tooltip" title="" data-original-title="Delete"><i class="ti-close"></i></a>
                  </div>

                  <div class="media media-single">
                    <span class="sortable-dot"></span>
                    <div class="custom-control custom-control-lg custom-checkbox flex-grow-1">
                      <input type="checkbox" class="custom-control-input"/>
                      <label class="custom-control-label strike-on-check">Read an article</label>
                    </div>
                    <a class="media-action" href="#" data-provide="tooltip" title="" data-original-title="Edit"><i class="ti-pencil"></i></a>
                    <a class="media-action hover-danger" href="#" data-provide="tooltip" title="" data-original-title="Delete"><i class="ti-close"></i></a>
                  </div>

                  <div class="media media-single bl-3 border-danger">
                    <span class="sortable-dot"></span>
                    <div class="custom-control custom-control-lg custom-checkbox flex-grow-1">
                      <input type="checkbox" class="custom-control-input"/>
                      <label class="custom-control-label strike-on-check">Begin promotional phase</label>
                    </div>
                    <a class="media-action" href="#" data-provide="tooltip" title="" data-original-title="Edit"><i class="ti-pencil"></i></a>
                    <a class="media-action hover-danger" href="#" data-provide="tooltip" title="" data-original-title="Delete"><i class="ti-close"></i></a>
                  </div>

                <div class="ps-scrollbar-x-rail" style={{left: "0px", bottom: "0px"}}>
                    <div class="ps-scrollbar-x" tabindex="0" style={{left: "0px", width: "0px"}}>
                    </div>
                </div>
                <div class="ps-scrollbar-y-rail" style={{top: "0px", right: "2px"}}>
                    <div class="ps-scrollbar-y" tabindex="0" style={{top: "0px", height: "0px"}}>
                    </div>
                </div>
            </div>

              </div>

              <div class="publisher bt-1 border-light">
                <input class="publisher-input" type="text" placeholder="Add new task"/>
                <a class="btn btn-sm btn-secondary" href="#"><i class="fa fa-paper-plane"></i></a>
              </div>

            </div>
          </div>



        </div>
      </div>


      <footer class="site-footer">
        <div class="row">
          <div class="col-md-6">
            <p class="text-center text-md-left">Copyright © 2019 <a href="http://thetheme.io/theadmin">TheAdmin</a>. All rights reserved.</p>
          </div>

          <div class="col-md-6">
            <ul class="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
              <li class="nav-item">
                <a class="nav-link" href="../help/articles.html">Documentation</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../help/faq.html">FAQ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://themeforest.net/item/theadmin-responsive-bootstrap-4-admin-dashboard-webapp-template/20475359?license=regular&amp;open_purchase_for_item_id=20475359&amp;purchasable=source&amp;ref=thethemeio">Purchase Now</a>
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

