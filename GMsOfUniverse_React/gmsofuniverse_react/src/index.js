import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/Accueil/Accueil'
import reducer from './reducers/reducers'
import 'bootstrap/dist/css/bootstrap.css';
/*import 'bootstrap/dist/custom_css/SurcoucheBootstrap09-12-2019.css';
import 'bootstrap/dist/custom_css/AppCustom.css';*/

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)