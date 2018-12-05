import { connect } from 'dva';

const commonMapStateToProps = (state) => ({ state });

const commonMapDispatchToProps = (dispatch) => ({ dispatch });

export default (mapStateToProps = null, mapDispatchToProps = null) => {

  const mapStateToProp = mapStateToProps || commonMapStateToProps;

  const mapDispatchToProp = mapDispatchToProps || commonMapDispatchToProps;

  return connect(mapStateToProp, mapDispatchToProp);
};