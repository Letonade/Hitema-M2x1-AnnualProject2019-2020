import React, { Component }	from 'react';
import { withRouter }               from 'react-router-dom';
import UserService			from '../../services/user.service';

import Navbar             	from '../../components/Common/Navbar/Navbar'
import AccueilJournalRows   from '../../components/Accueil/AccueilJournalRows'
import Footer             	from '../../components/Common/Footer/Footer'


class Accueil extends Component {

	componentDidMount() {
		UserService.VerificationToken() && this.props.history.push('/Login', /*OBJ*/);
	}

  	render(){
	  	return (
		    <div className="Accueil">
		      	<Navbar/>
		      	<AccueilJournalRows/>
		      	<Footer/>
		    </div>
	  	);
	}
}

export default withRouter(Accueil)

