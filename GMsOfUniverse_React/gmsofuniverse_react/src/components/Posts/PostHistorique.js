import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import Navbar               from '../../components/Common/Navbar/Navbar'
import Footer               from '../../components/Common/Footer/Footer'

import PostHistoriqueOne    from './PostHistoriqueOne'

class PostHistorique extends Component {

  // componentDidMount() {
    
  // }

 render(){
  return (
  <div className="PostHistorique">

    <Navbar/>

    <main className="main-container">

      <div className="main-content">

        <div className="media-list media-list-divided media-list-hover" data-provide="selectall">

          <header className="flexbox align-items-center media-list-header bg-transparent b-0 py-16 pl-20">
            <h3 className="text-fade">Historique</h3>
            {/*
            <div className="flexbox align-items-center">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input"/>
                <label className="custom-control-label"></label>
              </div>
            </div>
            */}

            <div>
              <div className="lookup lookup-circle lookup-right">
                <input type="text" data-provide="media-search"/>
              </div>
            </div>
          </header>

          <PostHistoriqueOne>
          </PostHistoriqueOne>

          <footer className="flexbox align-items-center py-20">
            <span className="flex-grow text-right text-lighter pr-2">1-10 of 1,853</span>
            <nav>
              <a className="btn btn-sm btn-square disabled" href="# "><i className="ti-angle-left"></i></a>
              <a className="btn btn-sm btn-square" href="# "><i className="ti-angle-right"></i></a>
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

