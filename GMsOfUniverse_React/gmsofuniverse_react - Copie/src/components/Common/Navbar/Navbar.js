import React from 'react';
import { withRouter }       from 'react-router-dom';

import avatar       from '../../../assets/img/avatar/5.jpg';
import logo         from '../../../assets/img/OurLogo.png';

function Navbar() {
  return (
          <header className="topbar">
            <div className="topbar-left">
              <img className="avatar rounded" src={logo} alt="..."/>
              <a class="topbar-btn d-none d-md-block" href=" #" data-provide="fullscreen tooltip" title="" data-original-title="Gm Universe">
                <i class="material-icons">Gm Universe</i>
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
                  <span className="topbar-btn" data-toggle="dropdown"><img className="avatar" src={avatar} alt="..."/>
                  </span>
                </li>
             
                <li className="dropdown d-none d-md-block">
                  <span className="topbar-btn has-new" data-toggle="dropdown"><i className="ti-bell"></i></span>
                </li>
              </ul>
            </div>
          </header>
  );
}

export default withRouter(Navbar);
