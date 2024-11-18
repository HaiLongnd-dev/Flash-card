import {TCard} from '../../types/Card';
import * as cardActions from '../actions/types/cardActionType';
import * as appActions from '../actions/types/appActionType';
import {TTopic} from '../../types/Topic';
export interface ICardState {
  cards: TTopic['cards'];
}

const initState: ICardState = {cards: []};
export default function cardReducer(
  state: ICardState = initState,
  action: cardActions.ICardAction | appActions.IAppAction,
): ICardState {
  switch (action.type) {
    // case cardActions.CardActionType.EDIT:
    //   console.log('here');
    //   return {
    //     ...state,
    //     cards: state.cards.map(card =>
    //       card.id === action.payload.params.id
    //         ? {...card, ...action.payload.params.card}
    //         : card,
    //     ),
    //   };

    // case cardActions.CardActionType.REMOVE:
    //   console.log('first', state);
    //   return {
    //     ...state,
    //     cards: state.cards.filter(
    //       card => card.id !== action.payload?.params?.id,
    //     ),
    //   };

    case appActions.AppActionType.CLEAR_ALL_DATA:
      return initState;
    default:
      return state;
  }
}
