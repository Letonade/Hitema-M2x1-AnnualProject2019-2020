import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import ReactQuill           from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

import Navbar               from '../../components/Common/Navbar/Navbar'
import Footer               from '../../components/Common/Footer/Footer'

import banner               from '../../assets/img/banner/ShadowrunBanner.png';
import image               from '../../assets/img/gallery/thumb/2.jpg';

class PostCreation extends Component {

  // componentDidMount() {
    
  // }

 render(){
  return (
  <div className="PostCreation">

    <Navbar/>

    <main className="main-container">

      <div class="main-content">
        <div class="row">

          {/*Pannel*/}
          <div class="col-lg-12 tab-content">
            <form className="card form-type-material tab-pane fade active show" id="tab1">
              <h4 className="card-title fw-400">Game Details</h4>

              <div className="card-body">
                <div className="row"> 
                  <div className="col-md-12"> 
                  <div class="card-body">
                <figure class="teaser teaser-bubba">
                  <img src={banner} alt="Bubba image hover effect"/>
                  <figcaption>
                    <h2 href="# " className="goldShadow">Buy now</h2>
                    <p>Shadow run is out now !</p>
                    <a href="# ">View more</a>
                  </figcaption>
                </figure>
              </div>
                    <ReactQuill theme="bubble"
                      modules={{toolbar : false}}
                      value="<h1>Warhammer 4ème édition</h1>"                      
                    />
                  </div>
                </div>
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
                        <option value="1">Interessé</option>
                        <option value="2">Initié</option>
                        <option value="3" selected>Confirmé</option>
                        <option value="4">Vétérans</option>
                      </select>
                      <label>Catégorie</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <select className="form-control" title="&#xA0;" data-provide="selectpicker">
                        <option value="1">Warhammer 1ere édition</option>
                        <option value="2" selected>Warhammer 2nd édition</option>
                        <option value="3">Warhammer 3eme édition</option>
                        <option value="4">Warhammer 4eme édition</option>
                        <option value="5">pathfinder 1ere édition</option>
                        <option value="6">pathfinder 2nd édition</option>
                        <option value="7">pathfinder 3eme édition</option>
                        <option value="8">Starfinder 1ere édition</option>
                        <option value="9">Shadowrun Sixth World</option>
                      </select>
                      <label>Univers</label>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="form-group">                      
                      <select className="form-control" title="&#xA0;" data-provide="selectpicker">
                        <option value="1" selected>OK</option>
                        <option value="2">KO</option>
                      </select>
                      <label>Mature Content</label>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="form-group">
                      <select className="form-control" title="&#xA0;" data-provide="selectpicker">
                        <option value="1" selected>FR</option>
                        <option value="2">EN</option>
                      </select>
                      <label>Langue</label>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="form-group">
                      <select className="form-control" title="&#xA0;" data-provide="selectpicker">
                        <option value="1">Campagne (selon la facon de voir des parisien)</option>
                        <option value="2">Paris</option>
                        <option value="3" selected>Région parisienne</option>
                      </select>
                      <label>Région</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <ReactQuill theme="snow"  
                        format={'header','bold', 'italic', 'underline', 'strike', 'blockquote','list', 'bullet', 'indent','link', 'image'}
                        value= "Le lord commander vous convoque immédiatement sur le pont pour une aventure par dela les océans, un pélerinnage d'aventures sur des terres rempli de joyaux antique et de joyeux bandits."/>
                      <label>Description</label>
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

export default withRouter(PostCreation)

