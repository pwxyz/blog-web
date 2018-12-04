// import styles from './index.css';

import React from 'react';

interface State{
  name: string;
}

interface Props{

}


export default class IndexPage extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            name: 'pwd',
        };
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
