import { ITEM_ADDED, ITEM_REMOVED, addNewItem, ITEM_PRICE_UPDATE, ITEM_QUANTITY_UPDATE} from './actions';
import produce from 'immer';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
];

const items = [
  { uuid: 1, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: 2, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {

  // if (action.type === ITEM_ADDED){
  //   const item = {
  //     uuid: id++,
  //     quantity: 1,
  //     ...action.payload
  //   };
  //   return [...state, item];
  // }

  if(action.type === ITEM_ADDED){
    produce(state, draftState => {
      const item = {
        uuid: id++,
        quantity: 1,
        ...action.payload
      };
      draftState.push(item)
    })
  }

  if (action.type === ITEM_REMOVED) {
    return state.filter(item => item.uuid !== action.payload.uuid);
  }

  // if (action.type === ITEM_PRICE_UPDATE) {
  //   return state.map(
  //     item =>
  //       item.uuid === action.payload.uuid ?
  //       {...item, price: action.payload.price}
  //       : item
  //     )
  // }

  if (action.type === ITEM_PRICE_UPDATE) {
    return produce(
      state, draftState => {
        let item = state.find(item => item.uuid === action.payload.uuid);
        item.price = Number(action.payload.price);
      }
    )
  }

  if (action.type === ITEM_QUANTITY_UPDATE) {
    return state.map(
      item =>
        item.uuid === action.payload.uuid ?
          { ...item, quantity: action.payload.quantity }
          : item
    )
  }
  return state;
};

export default reducer;
