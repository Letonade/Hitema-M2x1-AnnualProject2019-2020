import { createSelector } from 'reselect'
import { ACCUEIL_SHOW_ALL, 
        ACCUEIL_SHOW_METEO, 
        ACCUEIL_SHOW_AFFAIRE, 
        ACCUEIL_SHOW_TALENT, 
        ACCUEIL_SHOW_CALENDAR, 
        ACCUEIL_SHOW_BASIC } 
        from '../constants/AccueilCardFilterActionType'

const FILTER_NAME_TYPE = {
  [ACCUEIL_SHOW_METEO]    : "meteo",
  [ACCUEIL_SHOW_AFFAIRE]  : "affaire",
  [ACCUEIL_SHOW_TALENT]   : "talent",
  [ACCUEIL_SHOW_CALENDAR] : "calendar",
  [ACCUEIL_SHOW_BASIC]    : "basic"
}

const getAccueilCardVisibilityFilter = state => state.AccueilCardVisibilityFilter
const getCards = state => state.AccueilCards

export const getVisibleAccueilCards = createSelector(
  [getAccueilCardVisibilityFilter, getCards],
  (AccueilCardVisibilityFilter, AccueilCards) => {
    switch (AccueilCardVisibilityFilter) {
      case ACCUEIL_SHOW_ALL:
        return AccueilCards
      case ACCUEIL_SHOW_METEO:
        return AccueilCards.filter(card => card.filter.includes(FILTER_NAME_TYPE[ACCUEIL_SHOW_METEO]))
      case ACCUEIL_SHOW_AFFAIRE:
        return AccueilCards.filter(card => card.filter.includes(FILTER_NAME_TYPE[ACCUEIL_SHOW_AFFAIRE]))
      case ACCUEIL_SHOW_TALENT:
        return AccueilCards.filter(card => card.filter.includes(FILTER_NAME_TYPE[ACCUEIL_SHOW_TALENT]))
      case ACCUEIL_SHOW_CALENDAR:
        return AccueilCards.filter(card => card.filter.includes(FILTER_NAME_TYPE[ACCUEIL_SHOW_CALENDAR]))
      case ACCUEIL_SHOW_BASIC:
        return AccueilCards.filter(card => card.filter.includes(FILTER_NAME_TYPE[ACCUEIL_SHOW_BASIC]))
      default:
        throw new Error('Unknown filter: ' + AccueilCardVisibilityFilter)
    }
  }
)

export const getCompletedCardsCount = createSelector(
  [getCards],
  AccueilCards => (
    AccueilCards.reduce((count, Cards) =>
      AccueilCards.completed ? count + 1 : count,
      0
    )
  )
)