import { connect } from 'react-redux';
import { setAddLove } from '../actions/love';
import LoveButton from '../components/LoveButton/LoveButton';

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.lover
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setAddLove())
    }
  }
}

const AddLove = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoveButton);

export default AddLove;
