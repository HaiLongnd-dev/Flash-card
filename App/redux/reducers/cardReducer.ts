import {TCard} from '../../types/Card';
import * as cardActions from '../actions/types/cardActionType';
import * as appActions from '../actions/types/appActionType';
export interface ICardState {
  cards: TCard[];
}

const initState: ICardState = {cards: []};
export default function cardReducer(
  state: ICardState = initState,
  action: cardActions.ICardAction | appActions.IAppAction,
): ICardState {
  switch (action.type) {
    case cardActions.CardActionType.GET_LIST:
      return {
        ...state,
      };
    case cardActions.CardActionType.ADD:
      return {
        ...state,
        cards: [...state.cards, action.payload.params.card],
      };
    case cardActions.CardActionType.EDIT:
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload.params.id
            ? {...card, ...action.payload.params.card}
            : card,
        ),
      };

    case cardActions.CardActionType.REMOVE:
      return {
        ...state,
        cards: state.cards.filter(
          card => card.id !== action.payload?.params?.id,
        ),
      };

    case appActions.AppActionType.CLEAR_ALL_DATA:
      return initState;
    default:
      return state;
  }
}
