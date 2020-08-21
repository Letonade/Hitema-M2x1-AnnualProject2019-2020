import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import banner               from '../../assets/img/banner/ShadowrunBanner.png';

class PostHistoriqueOne extends Component {

  // componentDidMount() {
    
  // }

 render(){
  return (
          <div className="media-list-body bg-white b-1">
            <div className="media align-items-center">
              <img src={banner} className="avatarBanner avatarBanner-xl rounded" alt="..." />
              <a className="media-body text-truncate" href="#qv-product-details" data-toggle="quickview">
                <h5>Shadowrun Sixth world</h5>
                <small>Message</small>
              </a>
              <span className="lead text-fade mr-25" title="Balance" data-provide="tooltip">Buy Now !</span>
            </div>
            <div className="media align-items-center">
              <img src={banner} className="avatarBanner avatarBanner-xl rounded" alt="..." />
              <a className="media-body text-truncate" href="#qv-product-details" data-toggle="quickview">
                <h5>Shadowrun Sixth world</h5>
                <small>Message</small>
              </a>
              <span className="lead text-fade mr-25" title="Balance" data-provide="tooltip">Buy Now !</span>
            </div>            <div className="media align-items-center">
              <img src={banner} className="avatarBanner avatarBanner-xl rounded" alt="..." />
              <a className="media-body text-truncate" href="#qv-product-details" data-toggle="quickview">
                <h5>Shadowrun Sixth world</h5>
                <small>Message</small>
              </a>
              <span className="lead text-fade mr-25" title="Balance" data-provide="tooltip">Buy Now !</span>
            </div>          
          </div>
  );
 }
}

export default withRouter(PostHistoriqueOne)

