import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import Navbar                 from '../../components/Common/Navbar/Navbar'
import Footer                 from '../../components/Common/Footer/Footer'

import banner                 from '../../assets/img/banner/ShadowrunBanner.png';

class OrganiserCreation extends Component {

  // componentDidMount() {
    
  // }

 render(){
  return (
  <div className="OrganiserCreation">

    <Navbar/>

    <main className="main-container">

      <div class="main-content">
        <div class="row">

          {/*Pannel*/}
          <div class="col-lg-12 tab-content">
            <form className="card form-type-material tab-pane fade active show" id="tab1">
              <h4 className="card-title fw-400">Game Details</h4>

              <div className="card-body">
                <div className="flexbox gap-items-4">
                  <img className="img-fluid" src={banner} alt="..."/>

                  <div className="flex-grow">
                    <h5>The great campaign of the lord commander Sputnik avec Kat l'oublié du pénitent</h5>
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
                      <input className="form-control" type="text" value="Leton Bebug" disabled/>
                      <label>Maître du jeu</label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <input className="form-control" type="text" value="7"/>
                      <label>Maximum de joueurs</label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <select className="form-control" title="&#xA0;" data-provide="selectpicker">
                        <option>Interessé</option>
                        <option>Initié</option>
                        <option>Confirmé</option>
                        <option>Vétérans</option>
                      </select>
                      <label>Who ?</label>
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
    </main>

    <Footer/>

  </div>
  );
 }
}

export default withRouter(OrganiserCreation)

