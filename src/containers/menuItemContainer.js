import {connect} from 'react-redux';
import { MenuItem} from '../components/MenuItem';
import { removeItem, updatePrice, updateQuantity} from '../store/items/actions';

const mapDispatchToProps = (dispatch, otherProps) => ({
  remove: () => dispatch(removeItem(otherProps.uuid)),
  updatePrice: price => dispatch(updatePrice(otherProps.uuid, price)),
  updateQuantity: quantity => dispatch(updateQuantity(otherProps.uuid, quantity)),
})

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);