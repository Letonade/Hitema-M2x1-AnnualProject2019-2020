import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import banner               from '../../assets/img/banner/NoBanner.png';

class PostHistoriqueList extends Component {

    state = {

    }

  // componentDidMount() {
    
  // }

 render(){
  let [...child] = this.props.children;
  console.log(child);
  return (
    child.map((elem, x) => {
      console.log("elem");
      console.log(elem);
      return (
        <div className="media-list-body bg-white b-1" key={x}>
          <div className="media align-items-center">
            <img src={elem.img ? elem.img : banner} className="avatarBanner avatarBanner-xl rounded" alt="banner" />
            <a className="media-body text-truncate" href=" #">
              <h5>{elem.name}</h5>
              <small>{elem.message}</small>
            </a>
            <span className="lead text-fade mr-25" title="Balance">{elem.annonce}</span>
          </div>      
        </div>
      );
    })
  );
 }
}

export default withRouter(PostHistoriqueList)

