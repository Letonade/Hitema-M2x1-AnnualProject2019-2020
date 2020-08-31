import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import Navbar               from '../../components/Common/Navbar/Navbar'
import Footer               from '../../components/Common/Footer/Footer'

import PostHistoriqueList    from './PostHistoriqueList'

class PostHistorique extends Component {

  state = {
    Pagination : 0,
    PaginationNumber : 5,
    search : "",
    PostHistoriqueListe : [
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },

//massDriver

        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
        {
          "id": 25,
          "name": "Posty Posta",
          "date": {
              "date": "2011-05-02 01:23:56.000000",
              "timezone_type": 3,
              "timezone": "UTC"
          },
          "type_id": 1,
          "content": "Joby Joba lorem ipsum tatati tatata",
          "message": "Joby is our Joba",
          "annonce": "It is a good product",
          "sponsored": 0,
          "img": "http://127.0.0.1:8000/images/5f4be72deeadd263659897.png"
        },
//fin mass
    ],
/*      {
        id: 1
        ,img: null //image
        ,bannerAlt: "banner"
        ,title: "Shadowrun Sixth world" 
        //title->  pour les sliders, si il n'y à pas de message le title va dans h2 laissant p et h3 vide.
        //        dans le cas de présence de message, le message va dans p et le titre dans h2 laissant h3 vide.
        ,commercial : 0
        ,message : "Fight with brothers !"
      }*/
  }
  PaginationPlus(){
    let NumberResult = this.state.PaginationNumber + 5;
    NumberResult = (NumberResult < 0 || NumberResult > 50) ? 0 : NumberResult
    this.setState((prev) => ({PaginationNumber: NumberResult}));
  }

  PaginationMinus(){
    let NumberResult = this.state.PaginationNumber - 5;
    NumberResult = (NumberResult < 5 || NumberResult > 50) ? 5 : NumberResult
    this.setState((prev) => ({PaginationNumber: NumberResult}));
  }

  PaginationNext(){
    let Page = this.state.Pagination + 1;
    let MaxPage = this.SearchbarResult().length / this.state.PaginationNumber;
    Page = (Page < 0 || Page > MaxPage) ? 0 : Page
    this.setState((prev) => ({Pagination: Page}));
  }

  PaginationPrevious(){
    let Page = this.state.Pagination - 1;
    let MaxPage = this.SearchbarResult().length / this.state.PaginationNumber;
    Page = (Page < 0 || Page > MaxPage) ? 0 : Page
    this.setState((prev) => ({Pagination: Page}));
  }

  SearchbarResult(){
    return (
      this.state.PostHistoriqueListe.filter((elem) => 
        (
          (elem.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
          || (elem.message.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
          || (elem.annonce.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
        )
      )
    );
  }

  PaginationFilter(){
    let {Pagination, PaginationNumber} = this.state;
    Pagination = (Pagination < 0) ? 0 : Pagination;
    PaginationNumber = (PaginationNumber < 0) ? 10 : PaginationNumber;
    let posts = this.SearchbarResult().slice(Pagination * PaginationNumber, (Pagination + 1) * PaginationNumber);
    return(posts);
  }

  // componentDidMount() {
    
  // }

 render(){
    let {Pagination, PaginationNumber} = this.state;
  return (
  <div className="PostHistorique">

    <Navbar/>

    <main className="main-container">

      <div className="main-content">

        <div className="media-list media-list-divided media-list-hover" data-provide="selectall">

          <header className="flexbox align-items-center media-list-header bg-transparent b-0 py-16 pl-20">
            <h3 className="text-fade">Historique</h3>
            <div>
              <div className="lookup lookup-circle lookup-right">
                <input type="text" value={this.state.search} onChange={(e) => this.setState({search : e.target.value})}/>
              </div>
            </div>
          </header>

          <PostHistoriqueList>
            {this.PaginationFilter()}
          </PostHistoriqueList>

          <footer className="flexbox align-items-center py-20">
            <span className="flex-grow text-right text-lighter pr-2">{((Pagination*PaginationNumber)+1)+"-"+(((Pagination+1)*PaginationNumber))+" of "+this.SearchbarResult().length}</span>
            <nav>
              <a className="btn btn-sm btn-square" onClick={() => this.PaginationPrevious()}><i className="ti-angle-left"></i></a>
              <a className="btn btn-sm btn-square" onClick={() => this.PaginationMinus()}><i className="ti-minus"></i></a>
              <a className="btn btn-sm btn-square" onClick={() => this.PaginationPlus()}><i className="ti-plus"></i></a>
              <a className="btn btn-sm btn-square" onClick={() => this.PaginationNext()}><i className="ti-angle-right"></i></a>
            </nav>
          </footer>
        </div>
      </div>

    </main>

    <Footer/>

  </div>
  );
 }
}

export default withRouter(PostHistorique)

