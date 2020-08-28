import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';

import avatar       from '../../../assets/img/avatar/5.jpg';
import logo         from '../../../assets/img/OurLogo.png';

class Navbar extends Component {
  state = {
    user :{
      mail : null,
      avatar : null,
      avatarAlt : " 0 ",
    }
  }

  componentDidMount() {
    this.setState((prevState,currentprops) => {return ({
        user : {
          mail : (localStorage.getItem("ProfilMail") != null)     ? localStorage.getItem("ProfilMail")   : null,
          avatar : (localStorage.getItem("ProfilAvatar") != null) ? localStorage.getItem("ProfilAvatar") : null,
          avatarAlt : (localStorage.getItem("ProfilAvatar") != null) ? localStorage.getItem("ProfilAvatarAlt") : " 0 ",
          }
        })})
  }

  render (){return (

      <header className="topbar">
        <div className="topbar-left">
          <img className="avatar rounded" src={logo} alt="..."/>
          <a className="topbar-btn d-none d-md-block" href=" #" data-provide="fullscreen tooltip" title="" data-original-title="Gm Universe">
            <i className="material-icons">Gm Universe</i>
          </a>
        </div>

        <div className="topbar-right">
          <a className="topbar-btn" href=" #qv-global" data-toggle="quickview">
            <i className="ti-align-right"></i>
          </a>

          <div className="topbar-divider">
          </div>

          <ul className="topbar-btns">
            <li className="dropdown">
              <span className="topbar-btn" data-toggle="dropdown"><img className="avatar" src={this.state.user.avatar} alt={this.state.user.avatarAlt} />
              </span>
            </li>
         
            <li className="dropdown d-none d-md-block">
              <span className="topbar-btn has-new" data-toggle="dropdown"><i className="ti-bell"></i></span>
            </li>
          </ul>
        </div>
      </header>

  );}
}

export default withRouter(Navbar);
