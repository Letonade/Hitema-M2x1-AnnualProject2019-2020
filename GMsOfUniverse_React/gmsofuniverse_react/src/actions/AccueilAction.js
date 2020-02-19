import * as AccueilActionTypes from '../constants/AccueilActionType'

export const accueilSetVisibilityFilter = (filter) => ({
	type: AccueilActionTypes.ACCUEIL_SIDEBAR_SET_VISIBILITY_FILTER,
	filter
})