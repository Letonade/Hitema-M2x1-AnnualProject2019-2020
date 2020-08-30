import React, { Component } from 'react';


class OrganiserCreationInscrits extends Component {

  state = {

  }

/*  componentDidMount() {
    //this.setState(this.props.children)
  }*/

 render(){
  return (
    <div className="row">
      <div className="col-md-12">
        <label>Inscrits</label>
        <div className="card p-30 pt-50 text-center">
          <div className="row">

              {
                this.props.children.map((elem,x) => { // resultat de tous le filtrage
                  return (
                     <div className="col-md-2" key={x}>
                      <div>
                        <a className="avatar avatar-xxl status-success mb-3" href=" #">
                          <img src={elem.avatarImg} alt={elem.avatarAlt}/>
                        </a>
                      </div>
                      <h6 className={""+ (this.props.mj === elem.name) && "goldShadow"}>
                        <a href="../page/profile.html">
                          {elem.name}
                        </a>
                      </h6>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </div>
    </div>
  );
 }
}

export default (OrganiserCreationInscrits)


/*          
            <div className="col-md-2">
              <div>
                <a className="avatar avatar-xxl status-success mb-3" href="../page/profile.html">
                  <img src={avatar1} alt="..."/>
                </a>
              </div>
              <h6 className="goldShadow">
                <a href="../page/profile.html">
                  Leton Bebug
                </a>
              </h6>
              <p>
                <small className="fs-13">
                  Vétéran
                </small>
              </p>
            </div>

            
            <div className="col-md-2">
              <div>
                <a className="avatar avatar-xxl status-dark mb-3" href="../page/profile.html">
                  <img src={avatar2} alt="..."/>
                </a>
              </div>
              <h6>
                <a href="../page/profile.html">
                  Gabrielle Archangéli
                </a>
              </h6>
              <p>
                <small className="fs-13">
                  Initié
                </small>
              </p>
            </div>

            
            <div className="col-md-2">
              <div>
                <a className="avatar avatar-xxl status-info mb-3" href="../page/profile.html">
                  <img src={avatar3} alt="..."/>
                </a>
              </div>
              <h6>
                <a href="../page/profile.html">
                  Aliaksandr Legrand
                </a>
              </h6>
              <p>
                <small className="fs-13">
                  Confirmé
                </small>
              </p>
            </div>*/