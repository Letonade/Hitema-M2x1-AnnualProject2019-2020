import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import ReactQuill           from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

import Navbar               from '../../components/Common/Navbar/Navbar'
import Footer               from '../../components/Common/Footer/Footer'

import banner               from '../../assets/img/banner/ShadowrunBanner.png';

class PostHistorique extends Component {

  // componentDidMount() {
    
  // }

 render(){
  return (
  <div className="PostHistorique">

    <Navbar/>

    <main className="main-container">



    </main>

    <Footer/>

  </div>
  );
 }
}

export default withRouter(PostHistorique)

