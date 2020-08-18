import React, { Component } from 'react';

import avatar1       from '../../assets/img/avatar/5.jpg';
import avatar2       from '../../assets/img/avatar/1.jpg';
import avatar3       from '../../assets/img/avatar/6.jpg';

class OrganiserCreationInscrits extends Component {

  // componentDidMount() {
    
  // }

 render(){
  return (
    <div className="row">
      <div className="col-md-12">
        <label>Inscrits</label>
        <div className="card p-30 pt-50 text-center">
          <div className="row">

            {/*first card*/}
            <div className="col-md-2">
              <div>
                <a className="avatar avatar-xxl status-success mb-3" href="../page/profile.html">
                  <img src={avatar1} alt="..."/>
                </a>
              </div>
              <h6 className="goldShadow">
                <a href="../page/profile.html">
                  Leton Bebug
                </a>
              </h6>
              <p>
                <small className="fs-13">
                  Vétéran
                </small>
              </p>
            </div>

            {/*second card*/}
            <div className="col-md-2">
              <div>
                <a className="avatar avatar-xxl status-dark mb-3" href="../page/profile.html">
                  <img src={avatar2} alt="..."/>
                </a>
              </div>
              <h6>
                <a href="../page/profile.html">
                  Gabrielle Archangéli
                </a>
              </h6>
              <p>
                <small className="fs-13">
                  Initié
                </small>
              </p>
            </div>

            {/*third card*/}
            <div className="col-md-2">
              <div>
                <a className="avatar avatar-xxl status-info mb-3" href="../page/profile.html">
                  <img src={avatar3} alt="..."/>
                </a>
              </div>
              <h6>
                <a href="../page/profile.html">
                  Aliaksandr Legrand
                </a>
              </h6>
              <p>
                <small className="fs-13">
                  Confirmé
                </small>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
 }
}

export default (OrganiserCreationInscrits)