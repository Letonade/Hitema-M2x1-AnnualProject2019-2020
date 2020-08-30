  
import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
import PerfectScrollbar     from 'react-perfect-scrollbar'

import OrganiserGameApp     from './OrganiserGame'

class Organiser extends Component {

  state = {
    filtre : "all" //all,myGames,myHistory
    ,search : "" //all,myGames,myHistory
  }

  filteredResult() {
    let Content = this.props.children
    if (this.props.Connected) {
      let Sorted = Content.sort((a,b) => {return a.actualUser.passés > b.actualUser.passés})
      Sorted = Sorted.sort((a,b) => {return a.actualUser.inscrit < b.actualUser.inscrit})
      if (this.state.filtre === "all") 
        {Sorted = Sorted.filter((elem, x) => elem.actualUser.passés === 0)}
      if (this.state.filtre === "myGames") 
        {Sorted = Sorted.filter((elem, x) => elem.actualUser.inscrit === 1 && elem.actualUser.passés === 0)}
      if (this.state.filtre === "myHistory") 
        {Sorted = Sorted.filter((elem, x) => elem.actualUser.inscrit === 1 && elem.actualUser.passés === 1)}
      return (Sorted);
    }
    return (Content);
  }

/*  componentDidMount() {
  
  }*/

 render(){
  let conn = this.props.Connected;
  return (
  <div className="main-content">
    <div className="row">
      <div className="col-md-12 col-lg-12">
        <div className="card">
          <h4 className="card-title"><strong>Adventure book</strong></h4>
          <header className="media media-single media-list-header">
            <div className="lookup lookup-sm flex-grow-1">
              <input type="text" placeholder="Search..." data-provide="media-search" value={this.state.search} onChange={(e) => this.setState({search : e.target.value})}/>
            </div>

            <div className="custom-control custom-control-lg custom-checkbox pl-4"
              onClick={() => {conn && this.setState({filtre : "all"})}} >
              <input type="checkbox" className="custom-control-input" checked={conn && this.state.filtre==="all" ?1 :0 } readOnly />
              <label className={"custom-control-label "+ (!conn && "my-custom-greyHole")}>All incoming games</label>
            </div>

            <div className="custom-control custom-control-lg custom-checkbox pl-4"
              onClick={() => {conn && this.setState({filtre : "myGames"})}}>
              <input type="checkbox" className="custom-control-input" checked={conn && this.state.filtre==="myGames" ?1 :0 } readOnly />
              <label className={"custom-control-label "+ (!conn && "my-custom-greyHole")}>My games</label>
            </div>


            <div className="custom-control custom-control-lg custom-checkbox pl-4"
              onClick={() => {conn && this.setState({filtre : "myHistory"})}}>
              <input type="checkbox" className="custom-control-input" checked={conn && this.state.filtre==="myHistory" ?1 :0 } readOnly />
              <label className={"custom-control-label "+ (!conn && "my-custom-greyHole")}>My History</label>
            </div>
          </header>

          <PerfectScrollbar>
            <div className="media-list media-list-sm media-list-hover media-list-divided scrollable" style={{height: "400px"}} data-ps-id="dadac395-34e9-0117-df73-bf58e70fcf18">
              {
                this.filteredResult().filter((elem) => //searchbar
                  elem.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                ).map((elem,x) => { // resultat de tous le filtrage
                  return (
                    <OrganiserGameApp key={x} Connected={conn} childInsc={this.props.childInsc}>
                      {elem}
                    </OrganiserGameApp>
                  )
                })
              }
            </div>
          </PerfectScrollbar>
          <div className="text-center bt-1 border-light p-2">
            {this.props.Connected &&
              <a className="text-default text-uppercase d-block fs-10 fw-500 ls-1" href="/OrganiserCreationApp">Create a game</a>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  );
 }
}

export default withRouter(Organiser)