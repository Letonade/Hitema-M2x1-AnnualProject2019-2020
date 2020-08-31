import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import Navbar               from '../../components/Common/Navbar/Navbar'
import Footer               from '../../components/Common/Footer/Footer'

import banner               from '../../assets/img/banner/ShadowrunBanner.png';
import OrganisatorService from "../../services/organisator.service";

class PostOne extends Component {

  state = {
    ModeCreation: true,

    post: {
      id: 15,
      name: "Posty Posta",
      date: {
        date: "2011-05-02 01:23:56.000000",
        timezone_type: 3,
        timezone: "UTC"
      },
      type_id: 1,
      content: "Joby Joba lorem ipsum tatati tatata",
      message: "Joby is our Joba",
      annonce: "It is a good product",
      sponsored: true,
      img: "http://127.0.0.1:8000/images/5f4bf35cd1a51669672550.jpeg"
    },
    other_post_info: {
      owner: "test@test.com"
    }


  }


  async componentDidMount() {
    let ephemera = this.props.location.state;
    if (ephemera) {
      this.setState({ModeCreation: false});
      let response = await OrganisatorService.getPost({id: ephemera.id});
      if (response.ok) {
        let json = await response.json();
        this.setState((prev) => ({
          game: {
            ...prev.post,
            ...json.post,
          },
          OtherGameInfo: {
            ...prev.other_post_info,
            ...json.other_post_info,
          }
        }))
      } else {
        this.props.history.push('/', /*OBJ*/);
      }
    }
  }

 render(){
  return (
  <div className="PostOne">

    <Navbar/>

    <main className="main-container">

      <div className="main-content">
        <div className="row">

          {/*Pannel*/}
          <div className="col-lg-12 tab-content">
            <div className="card form-type-material tab-pane fade active show" id="tab1">
              <figure class="teaser teaser-bubba rounded">
                <img src={this.state.post.img} alt="banner"/>
                <figcaption>
                  <h2 className="goldShadow">{this.state.post.annonce}</h2>
                  <p>{this.state.post.message}</p>
                  <a href="# ">View more</a>
                </figcaption>
              </figure>
              <div className="card-body">
                
                <div className="row"> 
                  <div className="col-md-12"> 
                    <div className="text-center">
                      <h1>{this.state.post.name}</h1>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <p className="ml-5 mr-5">
                      {this.state.post.content}
                    </p>
                  </div>
                </div>
              </div>

              <footer className="card-footer text-right">
                <h6 className="text-secondary">{this.state.other_post_info.owner} </h6>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer/>

  </div>
  );
 }
}

export default withRouter(PostOne)

