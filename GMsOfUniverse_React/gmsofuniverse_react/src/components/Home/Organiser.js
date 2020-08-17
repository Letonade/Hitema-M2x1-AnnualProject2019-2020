  
import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
import PerfectScrollbar     from 'react-perfect-scrollbar'

class Home extends Component {

  // componentDidMount() {
    
  // }

 render(){
  return (
  <div className="main-content">
    <div className="row">
      <div className="col-md-12 col-lg-12">
        <div className="card">
          <h4 className="card-title"><strong>Todo list</strong></h4>
          <header className="media media-single media-list-header">
            <div className="lookup lookup-sm flex-grow-1">
              <input type="text" placeholder="Search..." data-provide="media-search"/>
            </div>

            <div className="custom-control custom-control-lg custom-checkbox pl-4">
              <input type="checkbox" className="custom-control-input"/>
              <label className="custom-control-label">My games</label>
            </div>
            <div className="custom-control custom-control-lg custom-checkbox pl-4">
              <input type="checkbox" className="custom-control-input"/>
              <label className="custom-control-label">My History</label>
            </div>
          </header>

          <PerfectScrollbar>
            <div className="media-list media-list-sm media-list-hover media-list-divided scrollable" style={{height: "400px"}} data-ps-id="dadac395-34e9-0117-df73-bf58e70fcf18">
              
              <p className="media media-single">
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
              </p>

              <p className="media media-single">
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
              </p>

              <p className="media media-single">
                <a href=" #">
                  <img className="avatar" src="../assets/img/avatar/1.jpg" alt=".T."/>
                </a>

                <div className="media-body">
                  <h6><a href=" #">Leton Bebug</a></h6>
                  <small className="text-fader">Ultimate Sportsman</small>
                </div>

                <div className="media-right">
                  <a className="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" href=" #">Followed</a>
                </div>
              </p>


              <p className="media media-single">
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
              </p>



              <p className="media media-single">
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
              </p>



              <p className="media media-single">
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
              </p>



              <p className="media media-single">
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
              </p>



              <p className="media media-single">
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
              </p>



              <p className="media media-single">
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
              </p>
            </div>
          </PerfectScrollbar>
          <div className="text-center bt-1 border-light p-2">
            <a className="text-default text-uppercase d-block fs-10 fw-500 ls-1" href=" #">Invite Friends</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
 }
}

export default withRouter(Home)