import { combineReducers } from 'redux'

// import AccueilCardVisibilityFilter 	from './AccueilCardVisibilityFilterReducers'
import AccueilCards 				from './AccueilCardReducers'
// import ChangePageFilter 			from './ChangePageFilterReducers'
// import Authentification 			from './AuthentificationReducers'

const rootReducer = combineReducers({
// // Les Filter concerne les méthodes de sélection du filtre, Les autres définissent les actions entrepris sur le composant.
// // Gestion du token et de l'authentification.
// 	Authentification,
// // Gestion du changement de pages \ composant main
// 	ChangePageFilter,
// // Gestion du filtrage des cards sur la page d'accueil \ composant cards.
// 	AccueilCardVisibilityFilter,
 	AccueilCards,
})

export default rootReducer