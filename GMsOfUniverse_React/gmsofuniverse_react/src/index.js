import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
//  Link
} from "react-router-dom";

import HomeApp 					from './components/Home/Home'
import HomeAppOLD 				from './components/Home/HomeOLD'
import LoginApp 				from './components/Authentification/LoginAccueil'
import OrganiserCreationApp 	from './components/OrganiserCreation/OrganiserCreation'
import PostCreationApp 			from './components/PostCreation/PostCreation'
import ProfilApp 				from './components/Users/Profil'
import reducer 					from './reducers/reducers'

import 'react-perfect-scrollbar/dist/css/styles.css';

import './assets/fonts/fontawesome-free-5.12.1-web/css/all.css';
import './assets/fonts/themify-icons/themify-icons.css';
import './assets/css/app.min.css';
import './assets/css/core.min.css';
import './assets/css/style.min.css';

// NOT IN REACT 
// import './assets/js/Jquery.js';
// import './assets/js/bootstrap.js';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/LoginApp" component={LoginApp} />
				<Route path="/ProfilApp" component={ProfilApp} />
				<Route path="/OrganiserCreationApp" component={OrganiserCreationApp} />
				<Route path="/PostCreationApp" component={PostCreationApp} />
				<Route path="/HomeAppOLD" component={HomeAppOLD} />
				<Route path="/" component={HomeApp} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root'),
)
