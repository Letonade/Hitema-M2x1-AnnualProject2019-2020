import { createSelector } from 'reselect'
import { CHANGE_PAGE_ACCUEIL,
    CHANGE_PAGE_LIST_TALENTS,
    CHANGE_PAGE_LIST_DEMANDES,
    CHANGE_PAGE_LIST_CAMPAGNE,
    CHANGE_PAGE_LIST_CONTRATS,
    CHANGE_PAGE_LIST_DEVIS,
    CHANGE_PAGE_LIST_FACTURES,
    CHANGE_PAGE_PARAM,}
        from '../constants/ChangePageFilterActionType'

const getChangePageFilter = state => state.ChangePageFilter
const getPages = state => state.ChangePage

export const getChangePage = createSelector(
  [getChangePageFilter, getPages],
  (ChangePageFilter, ChangePage) => {
    switch (ChangePageFilter) {
      case CHANGE_PAGE_ACCUEIL:
        return ChangePage[ChangePageFilter]
      case CHANGE_PAGE_LIST_TALENTS :
        return ChangePage[ChangePageFilter]
      case CHANGE_PAGE_LIST_DEMANDES :
        return ChangePage[ChangePageFilter]
      case CHANGE_PAGE_LIST_CAMPAGNE :
        return ChangePage[ChangePageFilter]
      case CHANGE_PAGE_LIST_CONTRATS :
        return ChangePage[ChangePageFilter]
      case CHANGE_PAGE_LIST_DEVIS :
        return ChangePage[ChangePageFilter]
      case CHANGE_PAGE_LIST_FACTURES :
        return ChangePage[ChangePageFilter]
      case CHANGE_PAGE_PARAM :
        return ChangePage[ChangePageFilter]
      default:
        throw new Error('Unknown filter: ' + ChangePageFilter)
    }
  }
)