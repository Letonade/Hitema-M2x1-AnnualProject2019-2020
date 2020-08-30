import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';

import UserService          from '../../../services/user.service';

import logo         from '../../../assets/img/OurLogo.png';

class Navbar extends Component {
  _isMounted = false;

  state = {
    logged : null,
    user :{
      mail : null,
      avatar : null,
      avatarAlt : " 0 ",
    }
  }

  Deconnexion () {
    UserService.Deconnexion();
    this.setState({logged : 0});
    this.props.history.push('/', /*OBJ*/);
    window.location.reload();
  }

  async componentDidMount() {
    this._isMounted = true;
    if (await UserService.VerificationToken())
      {await UserService.getProfil();
        if (this._isMounted === true)
        {// gestion de l'asynchrone
          this.setState({logged : 1})}
          this.setState((prevState,currentprops) => {return ({
          user : {
              mail : (localStorage.getItem("ProfilMail") != null)         ? localStorage.getItem("ProfilMail")   : null,
              avatar : (localStorage.getItem("ProfilAvatar") != null)     ? localStorage.getItem("ProfilAvatar") : null,
              avatarAlt : (localStorage.getItem("ProfilAvatar") != null)  ? localStorage.getItem("ProfilAvatarAlt") : " 0 ",
            }
          })})
        }
  }

  async componentWillUnmount() {
    this._isMounted = false;
  }

  render (){
    let connected = (
          <ul className="topbar-btns">
            <span className="topbar-btn" data-toggle="quickview" onClick={() => {this.Deconnexion()}}><i className="ti-close"></i></span>
            <span className="topbar-btn" data-toggle="quickview"><img className="avatar" src={this.state.user.avatar} alt={this.state.user.avatarAlt} />
            </span>
          </ul>
    );

    let disconnected = (
          <ul className="topbar-btns">
            <a className="btn btn-xs btn-round btn-success mr-2" href="/LoginApp">Log In</a>
          </ul>
    );

    return (
      <header className="topbar">
        <div className="topbar-left">
          <img className="avatar rounded" src={logo} alt="..."/>
          <a className="topbar-btn d-none d-md-block" href=" #" data-provide="fullscreen tooltip" title="" data-original-title="Gm Universe">
            <i className="material-icons">Gm Universe</i>
          </a>
        </div>
        <div className="topbar-right">

          {this.state.logged === 1 ? connected : disconnected}
        </div>
      </header>

  );}
}

export default withRouter(Navbar);
