import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';

class OrganiserGame extends Component {


  redirectToDetail () {
    this.props.history.push('/OrganiserCreationApp', {gameId : this.props.children.id});
  }

/*  componentDidMount() {
    console.log(this.props.children);
  }*/

 render(){
  let statusButton = null;
  if (this.props.Connected)
    statusButton = (
      <div className="media-right">
        {this.props.children.actualUser.inscrit === 1
          && this.props.children.actualUser.passés === 0
          && <a className="btn btn-sm btn-bold btn-round btn-outline btn-success w-100px" 
                  href="# " onClick={(e) => this.props.childInsc(this.props.children.id, false)}>
                    Inscrit
                </a>
        }
        {this.props.children.actualUser.inscrit === 0
          && this.props.children.actualUser.passés === 0
          && <a className="btn btn-sm btn-bold btn-round btn-info w-100px" 
                  href="# " onClick={(e) => this.props.childInsc(this.props.children.id, true)}>
                    Non-Inscrit
                </a>
        }
        {this.props.children.actualUser.passés === 1
          && this.props.children.actualUser.inscrit === 1
          && <p className="btn btn-sm btn-bold btn-round btn-outline btn-secondary w-100px active">
                    Passé
                </p>
        }
      </div>
  );
  
  return (
    <div className="media media-single">
      <a href="# ">
        <img className="avatar" src={this.props.children.avatarImg} alt={this.props.children.avatarAlt}/>
      </a>
      <div className="media-body row">
        <div className="col-md-4 col-lg-3">
          <h6><a href="# " onClick={() => this.redirectToDetail()}>{this.props.children.title}</a></h6>
          <small className="text-fader">{this.props.children.mj}</small>
        </div>
        <div className="col-md-5 col-lg-4">
          <p className="text-fader " 
            style={{"height": "70px", "overflow" : "hidden", "textOverflow" : "clip"}}
          >
            {this.props.children.description}
          </p>
        </div>
        <div className="col-md-3 col-lg-3">
          <h6 className="text-fader">{this.props.children.date.date}</h6>
          <h6 className="text-fader">{this.props.children.nombreInscrit} / {this.props.children.maxJoueur} Joueurs {this.props.children.langue}</h6>
          <h6 className="text-fader">{this.props.children.univers}</h6>
        </div>
        <div className="col-md-0 col-lg-2 d-md-none d-lg-block">
          <h6 className="text-fader">Joueurs {this.props.children.categorieDeJoueur}</h6>
          <h6 className="text-fader">Mature Content: {this.props.children.matureContent}</h6>
          <h6 className="text-fader">{this.props.children.region}</h6>
        </div>
      </div>

      {statusButton}

    </div>
  );
 }
}


export default withRouter(OrganiserGame)