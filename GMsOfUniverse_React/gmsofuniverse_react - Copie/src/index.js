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

import HomeApp 			from './components/Home/Home'
import reducer 			from './reducers/reducers'


import './assets/fonts/fontawesome-free-5.12.1-web/css/all.css';
import './assets/fonts/themify-icons/themify-icons.css';
import './assets/css/app.min.css';
import './assets/css/core.min.css';
import './assets/css/style.min.css';
// import './assets/js/Jquery.js';
// import './assets/js/bootstrap.js';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/" component={HomeApp} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root'),
)
