// On importe des actions sur les cards
/*import {
    ACCUEIL_ONLOAD,
    ACCUEIL_EDIT_CARD
} from '../constants/ActionType'
*/

const initialState = [
  {
    title: 'Méteo',
    inside: {
        inTitle: "Méteo in",
        inText: "blob"
      },
    filter: ['meteo'],
    type: 'text',
    date: null,
    link: '/#',
    id: 1
  },
]

export default function AccueilCards(state = initialState, action) {
  switch (action.type) {

    default:
      //console.log(action.type)
      return state
  }
}
