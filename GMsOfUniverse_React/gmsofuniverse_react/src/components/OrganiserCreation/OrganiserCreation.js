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

import banner               from '../../assets/img/banner/NoBanner.png';

import UserService            from '../../services/user.service';
import OrganisatorService     from "../../services/organisator.service";

class OrganiserCreation extends Component {

  state = {
    Connected : false,
    AmIMJ : false,
    ModeCreation: true,
    InPast : false,

    Activated : false,
    Processing : false,
    imageHaveChanged : false,

    gametypes : null, //liste
    game : 
    {
      id : null,
      title: "New",
      campagne_id: null,
      date: {
          date : new Date(),
          timezone_type : 3,
          timezone : "Europe/Berlin"
        },
      type_id: 1,
      description: {
        maxJoueur: 5,
        description: "Description",
        categorieDeJoueur: "Interessé",
        langue: "FR",
        matureContent: "KO",
        region: "Paris"
      }
    },

    "OtherGameInfo": {
      "avatarImg": null,
      "avatarAlt": " 0 ",
      "gameImg": null,
      "mj": null,
      "nombreInscrit": 0
    },

    participants : [] // liste des participants
    /*
    {
      "game": {
        "id": 4,
        "campagne_id": 14,
        "title": "ma_seconde_game",
        "description": {
          "description": "Faux!",
          "maxJoueur": 9,
          "categorieDeJoueur": "Initié",
          "langue": "EN",
          "matureContent": "OK",
          "region": "Paris"
        },
        "type_id": 2,
        "date": {
          "date": "2021-05-02 01:23:56.000000",
          "timezone_type": 3,
          "timezone": "Europe/Berlin"
        }
      },
      "OtherGameInfo": {
        "avatarImg": "http://127.0.0.1:8000/images/5f48fe8f71a45670289505.jpeg",
        "avatarAlt": " t ",
        "gameImg": " ",
        "mj": "test@test.com",
        "nombreInscrit": 2
      }
    }

    */


  }

//utility
  dualDigit(e) {
    return e = (e < 10) ? "0"+e : e;
  }

// les changers
  handleQuillChangeTitle (e) {
    e = e.slice(4,-5);
    this.setState((prevState) => ({game : {...prevState.game, title: e}}));
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
    if (e >= new Date((new Date()).valueOf() - 1000*3600*24)){
      const dateAsTxt = e.getFullYear()+"-"+(this.dualDigit(e.getMonth()+1))+"-"+this.dualDigit(e.getDate())+" "+this.dualDigit(e.getHours())+":"+this.dualDigit(e.getMinutes())+":"+this.dualDigit(e.getSeconds())
      //console.log(dateAsTxt);
      this.setState((prevState) => ({
        game : {...prevState.game, 
          date : {...prevState.game.date,
            date : dateAsTxt 
          }
        }
      }));
    }
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

  async changeImage(e){//e.target.files[0]
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      if (reader.result.indexOf("data:image/") === 0){
        console.log(reader.result.indexOf("data:image/"));
        this.setState((prev) => ({
          OtherGameInfo: {
            ...prev.OtherGameInfo,
            gameImg : reader.result
          },
          imageHaveChanged : true
        }));
      }
    }
    reader.readAsDataURL(file)
  }

  removeBanner(){
    this.setState((prev) => ({
      OtherGameInfo : {
        ...prev.OtherGameInfo,
        gameImg : null,
      }
    }));
  }
//handleSubmit
  async handleSubmit(e){
    e.preventDefault();
    await this.setState({Processing : true});
    if (this.state.ModeCreation) {//submit en creation
      let {id, ...game} = this.state.game;
      let response = await OrganisatorService.createCampagne({name: game.title});
      if (response.ok) {
        let {id} = await response.json();
        await this.setState((prevState) => ({
          game: {
            ...game,
            campagne_id: id,
          }
        }));
      response = await OrganisatorService.createGame(this.state.game);
        if (response.ok) {
          let {id} = await response.json();
          await this.setState((prevState) => ({
            game: {
              ...prevState.game,
              id: id,
            }
          }));
        }
      }
    }else{// submit en mode modification
      await OrganisatorService.modifyGame(this.state.game);
    }
    await this.setState({Processing : false});
    
    if (this.state.imageHaveChanged) {
      await OrganisatorService.addImg({
        "game_id" : this.state.game.id,
        "image": {
          "name" : "gameBanner",
          "value" : this.state.OtherGameInfo.gameImg
        }
      })
    }
    if (this.state.OtherGameInfo.gameImg === null)
    {
      OrganisatorService.removeImg({game_id : this.state.game.id});
    }
    
  }

//EVENT
  async componentDidMount() {
    // gestion du mode modification
    let ephemera = this.props.location.state;
    if(ephemera){
      this.setState({ModeCreation : false});
      let response = await OrganisatorService.getGame({game_id : ephemera.gameId});
      if (response.ok) {
        let json = await response.json();
        this.setState((prev) => ({
          game :{...prev.game,
            ...json.game,
          },
          OtherGameInfo :{...prev.OtherGameInfo,
            ...json.OtherGameInfo,
          }
        }))
      }else{
        this.props.history.push('/', /*OBJ*/);
      }
      response = await OrganisatorService.getParticipants({id : ephemera.gameId});
      if (response.ok) {
        let json = await response.json();
        json.forEach(e => {this.state.participants.push(e);
          });
      }else{
        this.props.history.push('/', /*OBJ*/);
      }
    }
    else{// gestion du mode creation
      this.setState((prev)=> ({    
      OtherGameInfo: {
        ...prev.OtherGameInfo,
        avatarImg: localStorage.getItem("ProfilAvatar"),
        avatarAlt: localStorage.getItem("ProfilAvatarAlt"),
        mj: localStorage.getItem("ProfilMail"),
        },
      }));
    }
    // récupération des données pour les selects
    let response = await OrganisatorService.getTypes();
    let json = await response.json();
    this.setState({gametypes : json});
    response = null;
    json = null;
    // gestion de la connexion
    if (await UserService.VerificationToken())
      {
        this.setState({Connected : true});
        if (this.state.ModeCreation || (localStorage.getItem("TokenAuthMail") === this.state.OtherGameInfo.mj))
          this.setState({AmIMJ : true});
      }else{
        this.setState({Connected : false});
      }
    if (this.state.game.date.date < new Date((new Date()).valueOf() - 1000*3600*24))
      this.setState({InPast : true})
    else
      this.setState({InPast : false})

    this.state.Connected && this.state.AmIMJ && !this.state.InPast && this.setState({Activated : true});
    this.state.Connected && this.state.ModeCreation && !this.state.InPast && this.setState({Activated : true});

    console.log("initial State of creation/modif");
    console.log(this.state);
  }

 render(){
  return (
  <div className="OrganiserCreation">

    <Navbar/>

    <main className="main-container">
        <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-danger w-200px" 
            href="# " onClick={() => {console.log(this.state)}}>
              State {this.state.Activated && "OK"}
          </a>
        </div>
      <div className="main-content">
        <div className="row">

          {/*Pannel*/}
          <div className="col-lg-12 tab-content">
            <form className="card form-type-material tab-pane fade active show" id="tab1" onSubmit={(e) => this.handleSubmit(e)}>
              <h4 className="card-title fw-400">Game Details</h4>

              <div className="card-body">
                <div className="flexbox gap-items-4">
                  <div className="row">
                    <div className="col-md-7 col-sm-0 ">
                      <img className="img-fluid" src={this.state.OtherGameInfo.gameImg ? this.state.OtherGameInfo.gameImg : banner} alt="..."/>
                    </div>
                    <div className="col-md-5 col-sm-12 ">
                      <div className="flex-grow">
                          <ReactQuill theme="bubble"
                            modules={{toolbar : false}}
                            onChange={(e) => {this.handleQuillChangeTitle(e)}}
                            value={"<h2>"+this.state.game.title+"</h2>"}
                          />
                        <div className="d-felx flex-column flex-sm-row gap-y gap-items-2 mt-16">
                          <div className="file-group file-group-inline">
                            <label htmlFor="banner" className="btn btn-sm btn-w-lg btn-outline btn-round btn-secondary">Change Picture</label>
                            <input id="banner" type="file" onChange={(e) => this.changeImage(e)}/>
                          </div>

                          <a className="btn btn-sm btn-w-lg btn-outline btn-round btn-danger align-top" href="# " onClick={() => {this.removeBanner()}}>Delete Picture</a>
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
                        selected={new Date(this.state.game.date.date)}/>
                      <label>Date</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input id="" className="form-control" type="text" placeholder={this.state.OtherGameInfo.mj} disabled/>
                      <label>Maître du jeu</label>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <input className="form-control" type="text" value={this.state.game.description.maxJoueur} pattern="[0-9]*"
                      id="maxJoueur" onChange={(e) => this.changeGameDescriptionForm(e)} />
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
                      <select className="form-control" title="&#xA0;" data-provide="selectpicker" 
                      id="type_id" value={this.state.game.type_id} onChange={(e) => this.changeGameForm(e)}>
                      {
                        this.state.gametypes && this.state.gametypes.map((elem,x) => {
                          return (<option value={elem.id} key={x}>{elem.name}</option>);
                        })
                      }
                      </select>
                      <label>Univers</label>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="form-group">                      
                      <select className="form-control" title="&#xA0;" data-provide="selectpicker"
                      id="matureContent" onChange={(e) => {this.changeGameDescriptionForm(e)}}
                      value={this.state.game.description.matureContent}>
                        <option value="1">OK</option>
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
                        <option value="FR">FR</option>
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
                        <option value="Région parisienne">Région parisienne</option>
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

                { (this.state.participants.length > 0) &&
                  <OrganiserCreationInscrits mj={localStorage.getItem("TokenAuthMail")}>
                    {this.state.participants}
                  </OrganiserCreationInscrits>
                }

              </div>

              <footer className="card-footer text-right">
                  {
                    !this.state.Processing && <button className="btn btn-flat btn-primary" type="submit">Save Changes</button>
                  }{
                    this.state.Processing && 
                    <div className="text-center">Processing
                      <span className="ml-3 spinner-dots">
                        <span className="dot1"></span>
                        <span className="dot2"></span>
                        <span className="dot3"></span>
                      </span>
                    </div>
                  }
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

