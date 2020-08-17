import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import Navbar                 from '../../components/Common/Navbar/Navbar'
import Footer                 from '../../components/Common/Footer/Footer'

class Home extends Component {

  // componentDidMount() {
    
  // }

 render(){
  return (
  <div className="Home">

    <Navbar/>

    <main className="main-container">



  
  </main>

  <Footer/>

  </div>
  );
 }
}

export default withRouter(Home)

