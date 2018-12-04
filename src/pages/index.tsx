// import styles from './index.css';

import React from 'react';
import { connect } from 'dva';

interface State{
  name: string;
}

interface Props{

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
    this.props.get('x');
  }

  render() {
    console.log(this.props, 'xxx');
    const { name } = this.state;
    return (
      <div>
        {name}
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);