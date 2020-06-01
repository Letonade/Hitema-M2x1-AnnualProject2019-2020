import { ACCUEIL_SIDEBAR_SET_VISIBILITY_FILTER } from '../constants/AccueilActionType'
import { ACCUEIL_SHOW_ALL } from '../constants/AccueilCardFilterActionType'

const AccueilCardVisibilityFilter = (state = ACCUEIL_SHOW_ALL, action) => {
	switch (action.type) {
		case ACCUEIL_SIDEBAR_SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

export default AccueilCardVisibilityFilter