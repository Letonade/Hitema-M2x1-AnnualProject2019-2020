import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';

class OrganiserGame extends Component {

  state = this.props.children

  // componentDidMount() {
    
  // }

 render(){
  return (
    <div className="media media-single">
      <a href=" #">
        <img className="avatar" src={this.state.avatarImg} alt={this.state.avatarAlt}/>
      </a>
      <div className="media-body row">
        <div className="col-md-4 col-lg-3">
          <h6><a href=" #">{this.state.title}</a></h6>
          <small className="text-fader">{this.state.mj}</small>
        </div>
        <div className="col-md-5 col-lg-4">
          <p className="text-fader " 
            style={{"height": "70px", "overflow" : "hidden", "textOverflow" : "clip"}}
          >
            {this.state.description}
          </p>
        </div>
        <div className="col-md-2 col-lg-2">
          <h6 className="text-fader">{this.state.nombreInscrit} / {this.state.maxJoueur} Joueurs</h6>
          <h6 className="text-fader">Joueurs {this.state.categorieDeJoueur} attendu</h6>
          <h6 className="text-fader">{this.state.univers}</h6>
        </div>
        <div className="col-md-0 col-lg-2 d-md-none d-lg-block">
          <h6 className="text-fader">{this.state.langue}</h6>
          <h6 className="text-fader">Mature Content: {this.state.matureContent}</h6>
          <h6 className="text-fader">{this.state.region}</h6>
        </div>
      </div>

      <div className="media-right">

        {this.state.actualUser.inscrit === 1 
          && this.state.actualUser.passés === 0
          && <a className="btn btn-sm btn-bold btn-round btn-outline btn-success w-100px" 
                  href=" #">
                    Inscrit
                </a>
        }
        {!this.state.actualUser.inscrit === 0
          && this.state.actualUser.passés === 0 
          && <a className="btn btn-sm btn-bold btn-round btn-info w-100px" 
                  href=" #">
                    Non-Inscrit
                </a>
        }
        {this.state.actualUser.passés === 1 
          && this.state.actualUser.inscrit === 1 
          && <a className="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px" 
                  href=" #">
                    Passé
                </a>
                <
        }
      </div>
    </div>
  );
 }
}


export default withRouter(OrganiserGame)