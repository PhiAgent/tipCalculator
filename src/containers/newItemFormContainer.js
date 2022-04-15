import {NewItemForm} from '../components/NewItemForm';
import {connect} from 'react-redux';
import {addNewItem} from '../store/items/actions';
import { bindActionCreators} from 'redux';

// without bindActionCreators
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (name, price) => {
      return dispatch(addNewItem(name, price))
    }
  }
};

// with bindActionCreators
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     onSubmit: (name, price) => addNewItem(name, price)
//   }, dispatch)
// };

// for simple version
// const mapDispatchToProps = {
//   onSubmit: (name, price) => addNewItem(name, price)
// };

export const NewItemFormContainer = connect(null, mapDispatchToProps)(NewItemForm);