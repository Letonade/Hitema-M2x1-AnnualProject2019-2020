import React, { Component }	from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import Navbar                 from '../../components/Common/Navbar/Navbar'
import Carousel               from 'react-bootstrap/Carousel'

import Slider1                from '../../assets/img/banner/WarhammerBanner.png'
import Slider2                from '../../assets/img/banner/StarfinderBanner.png'

import OrganiserApp           from './Organiser'

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

        </div>
      </div>

  <div className="col-12">
    <div className="divider text-uppercase fw-500">Games</div>
  </div>

  <OrganiserApp>
  </OrganiserApp>

  <footer className="site-footer">
    <div className="row">
      <div className="col-md-6">
        <p className="text-center text-md-left">Chat Conteur 2020</p>
      </div>

      <div className="col-md-6">
        <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
          <li className="nav-item">
            <a className="nav-link" href="#">Contact us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Ideas Box</a>
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

