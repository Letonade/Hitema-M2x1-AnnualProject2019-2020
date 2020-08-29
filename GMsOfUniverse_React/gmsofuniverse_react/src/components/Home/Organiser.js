  
import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
import PerfectScrollbar     from 'react-perfect-scrollbar'

import OrganiserGameApp     from './OrganiserGame'

class Organiser extends Component {

  state = {
    filtre : "all" //all,myGames,myHistory
  }

  filteredResult() {
    let Content = this.props.children
    let Sorted = Content.sort((a,b) => {return a.actualUser.passés > b.actualUser.passés})
    Sorted = Sorted.sort((a,b) => {return a.actualUser.inscrit < b.actualUser.inscrit})
    if (this.state.filtre === "all") 
      {Sorted = Sorted.filter((elem, x) => elem.actualUser.passés === 0)}
    if (this.state.filtre === "myGames") 
      {Sorted = Sorted.filter((elem, x) => elem.actualUser.inscrit === 1 && elem.actualUser.passés === 0)}
    if (this.state.filtre === "myHistory") 
      {Sorted = Sorted.filter((elem, x) => elem.actualUser.inscrit === 1 && elem.actualUser.passés === 1)}
    return (Sorted)
  }

/*  componentDidMount() {
  
  }*/

 render(){
  return (
  <div className="main-content">
          <div className="col-md-4 text-center">
          <a className="btn btn-sm btn-bold btn-round btn-outline btn-danger w-200px" 
            href="# " onClick={() => {console.log(this)}}>
              this Orga
          </a>
        </div>
    <div className="row">
      <div className="col-md-12 col-lg-12">
        <div className="card">
          <h4 className="card-title"><strong>Adventure book</strong></h4>
          <header className="media media-single media-list-header">
            <div className="lookup lookup-sm flex-grow-1">
              <input type="text" placeholder="Search..." data-provide="media-search"/>
            </div>

            <div className="custom-control custom-control-lg custom-checkbox pl-4"
              onClick={() => {this.setState({filtre : "all"})}}>
              <input type="checkbox" className="custom-control-input" checked={this.state.filtre==="all" ?1 :0 } readOnly />
              <label className="custom-control-label">All incoming games</label>
            </div>

            <div className="custom-control custom-control-lg custom-checkbox pl-4"
              onClick={() => {this.setState({filtre : "myGames"})}}>
              <input type="checkbox" className="custom-control-input" checked={this.state.filtre==="myGames" ?1 :0 } readOnly />
              <label className="custom-control-label">My games</label>
            </div>


            <div className="custom-control custom-control-lg custom-checkbox pl-4"
              onClick={() => {this.setState({filtre : "myHistory"})}}>
              <input type="checkbox" className="custom-control-input" checked={this.state.filtre==="myHistory" ?1 :0 } readOnly />
              <label className="custom-control-label">My History</label>
            </div>
          </header>

          <PerfectScrollbar>
            <div className="media-list media-list-sm media-list-hover media-list-divided scrollable" style={{height: "400px"}} data-ps-id="dadac395-34e9-0117-df73-bf58e70fcf18">
              {
                this.filteredResult().map((elem,x) => {
                  return (
                    <OrganiserGameApp key={x}>
                      {elem}
                    </OrganiserGameApp>
                  )
                })
              }
            </div>
          </PerfectScrollbar>
          <div className="text-center bt-1 border-light p-2">
            <a className="text-default text-uppercase d-block fs-10 fw-500 ls-1" href=" #">Create a game</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
 }
}

export default withRouter(Organiser)