import {Summary} from '../components/Summary';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  const items = state.items;
  let subtotal = items.reduce(
    (acc, item) => acc+ (item.quantity * item.price), 0
  );
  let tipAmount = subtotal * (state.tipPercentage/100);
  const total = subtotal + tipAmount;
  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);