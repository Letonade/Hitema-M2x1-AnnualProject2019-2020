import React, { Component }	from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import Navbar                 from '../../components/Common/Navbar/Navbar'
import Footer                 from '../../components/Common/Footer/Footer'
import Carousel               from 'react-bootstrap/Carousel'

import Slider1                from '../../assets/img/banner/WarhammerBanner.png'
import Slider2                from '../../assets/img/banner/StarfinderBanner.png'
import Slider3                from '../../assets/img/banner/ShadowrunBanner.png'

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
                <h3> </h3>
                <h2>Light you'r star.</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Slider3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3> </h3>
                <h2 style={{"text-shadow": "#FC0 1px 0 10px"}}>Buy Now !</h2>
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
                  <span className="">258 Parties en cours</span><br/>
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
                  <span className="">12 compte passé en confirmer</span><br/>
                  <span>
                    <i className="ti-angle-up text-success"></i>
                    <span className="fs-18 ml-1">12%</span>
                  </span>
                </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-body">
                <div className="text-center">
                  <span className="">28 nouveaux abbonés aujourd'hui</span><br/>
                  <span>
                    <i className="ti-angle-up text-success"></i>
                    <span className="fs-18 ml-1">8%</span>
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

  <Footer/>
  
  </main>
  </div>
  );
 }
}

export default withRouter(Home)

