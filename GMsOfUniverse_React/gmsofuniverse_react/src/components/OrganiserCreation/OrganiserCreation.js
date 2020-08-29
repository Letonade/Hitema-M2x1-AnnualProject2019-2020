import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import ReactQuill           from 'react-quill'; 
import 'react-quill/dist/quill.bubble.css';

import DatePicker           from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";

import Navbar               from '../../components/Common/Navbar/Navbar'
import Footer               from '../../components/Common/Footer/Footer'
import OrganiserCreationInscrits from './OrganiserCreationInscrits'

import banner               from '../../assets/img/banner/ShadowrunBanner.png';

class OrganiserCreation extends Component {

  state = {
    game : {
      id : null,
      name: "The great campaign of the lord commander Sputnik avec Kat l'oublié du pénitent",
      campagne_id: 1,
      date: "2020-05-02 01:40:56",
      type_id: 1,
      maxJoueur: 7,
      description: {
        description: "Le lord commander vous convoque immédiatement sur le pont pour une aventure par dela les océans, un pélerinnage d'aventures sur des terres rempli de joyaux antique et de joyeux bandits.",
        categorieDeJoueur: "Confirmé",
        langue: "FR",
        matureContent: "KO",
        region: "Paris"
      }
    }
  }

//utility
  dualDigit(e) {
    return e = (e < 10) ? "0"+e : e;
  }
// les changers
  handleQuillChangeTitle (e) {
    e = e.slice(4,-5);
    this.setState((prevState) => ({game : {...prevState.game, name: e}}));
  }

  handleQuillChangeDescription (e) {
    this.setState((prevState) => ({
      game : {...prevState.game, 
      description : {
          ...prevState.game.description, 
          description : e
      } }
    }));
  }

  handleDatePickerChange (e) {
    const dateAsTxt = e.getFullYear()+"-"+(this.dualDigit(e.getMonth()+1))+"-"+this.dualDigit(e.getDate())+" "+this.dualDigit(e.getHours())+":"+this.dualDigit(e.getMinutes())+":"+this.dualDigit(e.getSeconds())
    //console.log(dateAsTxt);
    this.setState((prevState) => ({
      game : {...prevState.game, 
        date : e.toString()
      }
    }));
  }

  changeGameForm(e){
    let {id, value, validity} = e.target;
    if(validity.valid){
      this.setState((prevState) => ({
        game : {...prevState.game, 
          [id] : value
        }
      }));
    }
  }

  changeGameDescriptionForm(e){
    //console.log(e.target);
    let {id, value, validity} = e.target;
    if(validity.valid){
      this.setState((prevState) => ({
        game : {...prevState.game, 
          description : {
            ...prevState.game.description, 
            [id] : value
          }
        }
      }));
    }
  }

  componentDidMount() {
    ////récupérer l'Id
    //this.props.location.state
    
  }

 render(){
  return (
  <div className="OrganiserCreation">

    <Navbar/>

        
    <main className="main-container">
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-danger w-200px" 
            href="# " onClick={() => {console.log(this.state)}}>
              State
          </a>
        </div>
      <div className="main-content">
        <div className="row">

          {/*Pannel*/}
          <div className="col-lg-12 tab-content">
            <form className="card form-type-material tab-pane fade active show" id="tab1">
              <h4 className="card-title fw-400">Game Details</h4>

              <div className="card-body">
                <div className="flexbox gap-items-4">
                  <div className="row">
                    <div className="col-md-7 col-sm-0 ">
                      <img className="img-fluid" src={banner} alt="..."/>
                    </div>
                    <div className="col-md-5 col-sm-12 ">
                      <div className="flex-grow">
                          <ReactQuill theme="bubble"
                            modules={{toolbar : false}}
                            onChange={(e) => {this.handleQuillChangeTitle(e)}}
                            value={"<h2>"+this.state.game.name+"</h2>"}
                          />
                        <div className="d-felx flex-column flex-sm-row gap-y gap-items-2 mt-16">
                          <div className="file-group file-group-inline">
                            <button className="btn btn-sm btn-w-lg btn-outline btn-round btn-secondary file-browser" type="button">Change Picture</button>
                            <input type="file"/>
                          </div>

                          <a className="btn btn-sm btn-w-lg btn-outline btn-round btn-danger align-top" href="# ">Delete Picture</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr/>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <DatePicker
                        customInput={<input className="form-control text-center text-info " type="text"/>}
                        dateFormat="dd/MM/yyyy" 
                        showMonthDropdown
                        withPortal
                        id="date" onChange={(e) => this.handleDatePickerChange(e)}
                        selected={new Date(this.state.game.date)}/>
                      <label>Date</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input id="" className="form-control" type="text" value="Leton Bebug" disabled/>
                      <label>Maître du jeu</label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <input className="form-control" type="text" value={this.state.game.maxJoueur} pattern="[0-9]*"
                      id="maxJoueur" onChange={(e) => this.changeGameForm(e)} />
                      <label>Maximum de joueurs</label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <select className="form-control" title="&#xA0;" data-provide="selectpicker" 
                      id="categorieDeJoueur" onChange={(e) => {this.changeGameDescriptionForm(e)}}
                      value={this.state.game.description.categorieDeJoueur}>
                        <option value="Interessé" >Interessé</option>
                        <option value="Initié"    >Initié</option>
                        <option value="Confirmé"  >Confirmé</option>
                        <option value="Vétérans"  >Vétérans</option>
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
                      <select className="form-control" title="&#xA0;" data-provide="selectpicker"
                      id="matureContent" onChange={(e) => {this.changeGameDescriptionForm(e)}}
                      value={this.state.game.description.matureContent}>
                        <option value="1" selected>OK</option>
                        <option value="2">KO</option>
                      </select>
                      <label>Mature Content</label>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="form-group">
                      <select className="form-control" title="&#xA0;" data-provide="selectpicker"
                      id="langue" onChange={(e) => {this.changeGameDescriptionForm(e)}}
                      value={this.state.game.description.langue}>
                        <option value="FR" selected>FR</option>
                        <option value="EN">EN</option>
                      </select>
                      <label>Langue</label>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="form-group">
                      <select className="form-control" title="&#xA0;" data-provide="selectpicker"
                      id="region" onChange={(e) => {this.changeGameDescriptionForm(e)}}
                      value={this.state.game.description.region}>
                        <option value="Campagne">Campagne</option>
                        <option value="Paris">Paris</option>
                        <option value="Région parisienne" selected>Région parisienne</option>
                      </select>
                      <label>Région</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <ReactQuill theme="bubble"
                        value= {this.state.game.description.description}
                        onChange={(e) => {this.handleQuillChangeDescription(e)}}
                      />
                      <label>Description</label>
                    </div>
                  </div>
                </div>

                <OrganiserCreationInscrits>
                </OrganiserCreationInscrits>

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

