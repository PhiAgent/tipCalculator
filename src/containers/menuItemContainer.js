import {connect} from 'react-redux';
import { MenuItem} from '../components/MenuItem';
import {removeItem} from '../store/items/actions';

const mapDispatchToProps = (dispatch, otherProps) => ({
  remove: () => dispatch(removeItem(otherProps.uuid))
})

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);