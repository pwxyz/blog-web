import React from 'react';
import extraConnect from '@/utils/extraConnect';
import Title from '@/components/Title';

interface Props{
  state: {
    home: {
      title: Array<object>;
    };
  };
  dispatch: (any: any) => void;
}

interface State{

}


@extraConnect()
class Home extends React.Component<Props, State> {
  componentDidMount() {
    this.props.dispatch({type: 'home/getTitle', payload: {xx: 'ssd'} });
  }

  render() {
    const home = this.props.state.home;
    return (
      <div>
        {
          home.title && home.title.length && home.title.map((i, index) => <Title key={index} obj={i} />)
        }
      </div>
    );
  }
}

export default Home;