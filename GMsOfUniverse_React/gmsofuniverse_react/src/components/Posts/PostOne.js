import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
// import UserService           from '../../services/user.service';

import ReactQuill           from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

import Navbar               from '../../components/Common/Navbar/Navbar'
import Footer               from '../../components/Common/Footer/Footer'

import banner               from '../../assets/img/banner/ShadowrunBanner.png';

class PostOne extends Component {

  // componentDidMount() {
    
  // }

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
                <img src={banner} alt="..."/>
                <figcaption>
                  <h2 className="goldShadow">Buy now</h2>
                  <p>Shadow run is out now !</p>
                  <a href="# ">View more</a>
                </figcaption>
              </figure>
              <div className="card-body">
                
                <div className="row"> 
                  <div className="col-md-12"> 
                    <div className="text-center">
                      <h1>Shadowrun Sixth world</h1>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <p className="ml-5 mr-5">
                      The standard Lorem Ipsum passage, used since the 1500s"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"1914 translation by H. Rackham"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                    </p>
                  </div>
                </div>
              </div>

              <footer className="card-footer text-right">
                <h6 className="text-secondary">By Leton Bebug</h6>
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

