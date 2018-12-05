// import styles from './index.css';

import React from 'react';
import { connect } from 'dva';

interface State{
  name: string;
}

interface Props{
  get: () => void;
}

const mapStateToProps = state => {
  return {
    config: state.config
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    get: payload => dispatch({
      type: 'config/getArticleList',
      payload
    })
  };
};


class IndexPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'pwd',
    };
  }
  componentDidMount() {
    this.props.get();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);