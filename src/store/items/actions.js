export const ITEM_ADDED = 'ITEM_ADDED';

export const addNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: {
    name,
    price
  }
});

// action
// reducer
// wrap
// remove menu-item