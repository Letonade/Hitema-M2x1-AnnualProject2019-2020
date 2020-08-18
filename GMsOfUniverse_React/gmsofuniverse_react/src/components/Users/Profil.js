import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import Navbar                 from '../../components/Common/Navbar/Navbar'
import Footer                 from '../../components/Common/Footer/Footer'

import avatar       from '../../assets/img/avatar/5.jpg';

class Profil extends Component {

  // componentDidMount() {
    
  // }

 render(){
  return (
  <div className="Profil">

    <Navbar/>

    <main className="main-container">

      <div class="main-content">
        <div class="row">

          {/*Selector*/}
          <div class="col-lg-3">
            <div class="card">
              <ul class="nav nav-lg nav-pills flex-column">
                <li class="nav-item active">
                  <a class="nav-link" href="#tab1" data-toggle="tab">User Details</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#tab2" data-toggle="tab">Settings</a>
                </li>
              </ul>
            </div>
          </div>

          {/*Pannel 1*/}
          <div class="col-lg-9 tab-content">
            <form className="card form-type-material tab-pane fade active show" id="tab1">
              <h4 className="card-title fw-400">User Details</h4>

              <div className="card-body">
                <div className="flexbox gap-items-4">
                  <img className="avatar avatar-xl" src={avatar} alt="..."/>

                  <div className="flex-grow">
                    <h5>Leton Bebug</h5>
                    <div className="d-felx flex-column flex-sm-row gap-y gap-items-2 mt-16">
                      <div className="file-group file-group-inline">
                        <button className="btn btn-sm btn-w-lg btn-outline btn-round btn-secondary file-browser" type="button">Change Picture</button>
                        <input type="file"/>
                      </div>

                      <a className="btn btn-sm btn-w-lg btn-outline btn-round btn-danger align-top" href="#">Delete Picture</a>
                    </div>

                  </div>
                </div>

                <hr/>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="text"/>
                      <label>First name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="text"/>
                      <label>Last name</label>
                    </div>
                  </div>
                </div>


                <div className="form-group">
                  <input className="form-control" type="text"/>
                  <label>Email</label>
                </div>


                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <select className="form-control" title="&#xA0;" data-provide="selectpicker">
                        <option>France</option>
                      </select>
                      <label>Country</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="text"/>
                      <label>Phone</label>
                    </div>
                  </div>
                </div>
              </div>

              <footer className="card-footer text-right">
                <button className="btn btn-flat btn-primary" type="submit">Save Changes</button>
              </footer>
            </form>
          </div>
        </div>
      </div>

      {/*Pannel 2*/}
      <div class="col-lg-9 tab-content">
        <form className="card form-type-material tab-pane fade" id="tab2">
          <h4 className="card-title fw-400">User Details</h4>

          <div className="card-body">
            <div className="flexbox gap-items-4">
              <img className="avatar avatar-xl" src="assets/img/avatar/2.jpg" alt="..."/>

              <div className="flex-grow">
                <h5>Hossein Shams</h5>
                <div className="d-felx flex-column flex-sm-row gap-y gap-items-2 mt-16">
                  <div className="file-group file-group-inline">
                    <button className="btn btn-sm btn-w-lg btn-outline btn-round btn-secondary file-browser" type="button">Change Picture</button>
                    <input type="file"/>
                  </div>

                  <a className="btn btn-sm btn-w-lg btn-outline btn-round btn-danger align-top" href="#">Delete Picture</a>
                </div>

              </div>
            </div>

            <hr/>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" type="text"/>
                  <label>First name</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" type="text"/>
                  <label>Last name</label>
                </div>
              </div>
            </div>


            <div className="form-group">
              <input className="form-control" type="text"/>
              <label>Email</label>
            </div>


            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <select className="form-control" title="&#xA0;" data-provide="selectpicker">
                    <option>France</option>
                  </select>
                  <label>Country</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" type="text"/>
                  <label>Phone</label>
                </div>
              </div>
            </div>
          </div>

          <footer className="card-footer text-right">
            <button className="btn btn-flat btn-primary" type="submit">Save Changes</button>
          </footer>
        </form>
      </div>
    </main>

    <Footer/>

  </div>
  );
 }
}

export default withRouter(Profil)

