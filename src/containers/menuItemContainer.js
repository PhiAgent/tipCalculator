import {connect} from 'react-redux';
import { MenuItem} from '../components/MenuItem';
import { removeItem, updatePrice, updateQuantity} from '../store/items/actions';
import { selectItemTotal} from '../store/items/selector';

const mapDispatchToProps = (dispatch, otherProps) => ({
  remove: () => dispatch(removeItem(otherProps.uuid)),
  updatePrice: price => dispatch(updatePrice(otherProps.uuid, price)),
  updateQuantity: quantity => dispatch(updateQuantity(otherProps.uuid, quantity)),
})

const mapStateToProps = (state, props) => {
  const total = selectItemTotal(state, props);
  return {total};
}

export const MenuItemContainer = connect(mapStateToProps, mapDispatchToProps)(MenuItem);