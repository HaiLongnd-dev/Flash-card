import {TCard} from '../../types/Card';
import * as actions from '../actions/types/cardActionType';
export interface ICardState {
  cards: TCard[];
}

const initState: ICardState = {cards: []};
export default function cardReducer(
  state: ICardState = initState,
  action: actions.ICardAction,
): ICardState {
  switch (action.type) {
    case actions.CardActionType.GET_LIST:
      return {
        ...state,
      };
    case actions.CardActionType.ADD:
      return {
        ...state,
        cards: [...state.cards, action.payload.params.card],
      };
    case actions.CardActionType.EDIT:
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload
            ? {...card, ...action.payload.params}
            : card,
        ),
      };

    case actions.CardActionType.REMOVE:
      return {
        ...state,
        cards: state.cards.filter(
          card => card.id !== action.payload?.params?.id,
        ),
      };

    default:
      return state;
  }
}
