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

    state = {
      homeCarroussel : 
        [
          {
            img : Slider1
            ,commercial : 0
            ,h3 : "Warhammer JDR 4eme Edition"
            ,h2 : ""
            ,p : "Fight with brothers !"
            ,alt : "SlideShow"
          },
          {
            img : Slider2
            ,commercial : 0
            ,h3 : ""
            ,h2 : "Light you'r star."
            ,p : ""
            ,alt : "SlideShow"
          },
          {
            img : Slider3
            ,commercial : 1
            ,h3 : ""
            ,h2 : "Buy Now !"
            ,p : ""
            ,alt : "SlideShow"
          }
        ],
      homeOrganisator :
        [
          {
            avatarImg : ""
            ,avatarAlt : ".T."
            ,title : "The great campaign of the lord commander Sputnik avec Kat l'oublié du pénitent"
            ,mj : "Leton Bebug"
            ,description : "Le lord commander vous convoque immédiatement sur le pont pour une aventure par dela les océans, un pélerinnage d'aventures sur des terres rempli de joyaux antique et de joyeux bandits."
            ,maxJoueur : 7
            ,nombreInscrit : 6
            ,categorieDeJoueur : "Confirmé"
            ,univers : "Warhammer 2nd édition"
            ,langue : "FR"
            ,matureContent : "OK"
            ,region : "Région Parisienne"
            ,actualUser : {
              inscrit : 1
              ,passés : 0
            }
          }
        ],
      homeStats : 
        [
          {
            title :"Parties en cours"
            ,number : "258"
            ,percent : "27%"
            ,howClass : "ti-angle-up text-success"
          },
          {
            title :"Comptes passés en confirmer"
            ,number : "12"
            ,percent : "12%"
            ,howClass : "ti-angle-up text-success"
          },
          {
            title :"Nouveaux abbonés aujourd'hui"
            ,number : "28"
            ,percent : "27%"
            ,howClass : "ti-angle-up text-success"
          }
        ]
    }

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
            {// mise en place du carroussel
              this.state.homeCarroussel.map((elem,x) => 
              {
                return (
                  <Carousel.Item key={x}>
                    <img
                      className="d-block w-100"
                      src={elem.img}
                      alt={elem.alt}
                    />
                    <Carousel.Caption>
                      {elem.h3 && <h3>{elem.h3}</h3>}
                      {elem.h2 && <h2 className={elem.commercial && "goldShadow"} >{elem.h2}</h2>}
                      {elem.p && <p>{elem.p}</p>}
                    </Carousel.Caption>
                  </Carousel.Item>
                 )
              })
            }
          </Carousel>
        </div>
      </div>

      <div className="col-12">
        <div className="divider text-uppercase fw-500">Some Stats</div>
      </div>

      <div className="main-content">
        <div className="row">
          {// statistiques
            this.state.homeStats.filter((elem,x) => x>-1 && x<3).map((elem, x) => {
              return (
                <div className="col-md-4" key={x}>
                  <div className="card card-body">
                      <div className="text-center">
                        <span className="">{elem.number} {elem.title}</span><br/>
                        <span>
                          <i className={elem.howClass}></i>
                          <span className="fs-18 ml-1">{elem.percent}</span>
                        </span>
                      </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

  <div className="col-12">
    <div className="divider text-uppercase fw-500">Games</div>
  </div>

  <OrganiserApp>
    {this.state.homeOrganisator}
  </OrganiserApp>

  <Footer/>
  
  </main>
  </div>
  );
 }
}

export default withRouter(Home)

