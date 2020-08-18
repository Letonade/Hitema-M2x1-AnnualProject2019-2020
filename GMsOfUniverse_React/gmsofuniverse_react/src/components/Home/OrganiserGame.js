import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';

class OrganiserGame extends Component {

  // componentDidMount() {
    
  // }

 render(){
  return (
    <p className="media media-single">
      <a href=" #">
        <img className="avatar" src="../assets/img/avatar/1.jpg" alt=".T."/>
      </a>

      <div className="media-body row">
        <div className="col-md-4 col-lg-3">
          <h6><a href=" #">The great campaign of the lord commander Sputnik avec Kat l'oublié du pénitent</a></h6>
          <small className="text-fader">Leton Bebug</small>
        </div>
        <div className="col-md-5 col-lg-4">
          <p className="text-fader " style={{"height": "70px", "overflow" : "hidden", "text-overflow" : "clip"}}>Le lord commander vous convoque immédiatement sur le pont pour une aventure par dela les océans, un pélerinnage d'aventures sur des terres rempli de joyaux antique et de joyeux bandits.</p>
        </div>
        <div className="col-md-2 col-lg-2">
          <h6 className="text-fader">6/7 Joueurs</h6>
          <h6 className="text-fader">Joueurs Confirmé attendu</h6>
          <h6 className="text-fader">Warhammer 2nd édition</h6>
        </div>
        <div className="col-md-0 col-lg-2">
          <h6 className="text-fader">FR</h6>
          <h6 className="text-fader">Mature Content: OK</h6>
          <h6 className="text-fader">Région Parisienne</h6>
        </div>

      </div>

      <div className="media-right">
        <a className="btn btn-sm btn-bold btn-round btn-outline btn-success w-100px" href=" #">Inscrit</a>
      </div>
    </p>
  );
 }
}


export default withRouter(OrganiserGame)