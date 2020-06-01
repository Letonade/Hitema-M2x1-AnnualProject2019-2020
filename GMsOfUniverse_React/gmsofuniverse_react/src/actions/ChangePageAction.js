import * as ChangePageActionTypes from '../constants/ChangePageActionType'

export const changeSelectedPage = (filter) => ({
	type: ChangePageActionTypes.CHANGE_SELECTED_PAGE,
	filter
})