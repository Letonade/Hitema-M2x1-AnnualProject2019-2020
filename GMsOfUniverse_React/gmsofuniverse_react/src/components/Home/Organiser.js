  
import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
import PerfectScrollbar     from 'react-perfect-scrollbar'

import OrganiserGameApp     from './OrganiserGame'

class Organiser extends Component {

  // componentDidMount() {
    
  // }

 render(){
  return (
  <div className="main-content">
    <div className="row">
      <div className="col-md-12 col-lg-12">
        <div className="card">
          <h4 className="card-title"><strong>Adventure book</strong></h4>
          <header className="media media-single media-list-header">
            <div className="lookup lookup-sm flex-grow-1">
              <input type="text" placeholder="Search..." data-provide="media-search"/>
            </div>

            <div className="custom-control custom-control-lg custom-checkbox pl-4">
              <input type="checkbox" className="custom-control-input"/>
              <label className="custom-control-label">All incoming games</label>
            </div>
            <div className="custom-control custom-control-lg custom-checkbox pl-4">
              <input type="checkbox" className="custom-control-input"/>
              <label className="custom-control-label">My games</label>
            </div>
            <div className="custom-control custom-control-lg custom-checkbox pl-4">
              <input type="checkbox" className="custom-control-input"/>
              <label className="custom-control-label">My History</label>
            </div>
          </header>

          <PerfectScrollbar>
            <div className="media-list media-list-sm media-list-hover media-list-divided scrollable" style={{height: "400px"}} data-ps-id="dadac395-34e9-0117-df73-bf58e70fcf18">

              <OrganiserGameApp>
              </OrganiserGameApp>

            </div>
          </PerfectScrollbar>
          <div className="text-center bt-1 border-light p-2">
            <a className="text-default text-uppercase d-block fs-10 fw-500 ls-1" href=" #">Create a game</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
 }
}

export default withRouter(Organiser)