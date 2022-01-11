import { connect } from 'react-redux';
import TipSelect from '../components/TipSelect';
import { updateTip } from '../store/tip-percentage/actions';

// wha
const mapStateToProps = (state) => {
  return {
    tipPercentage: state.tipPercentage
  };
};

const mapDispatchToProps = {
  updateTip
};

export const TipSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TipSelect);
