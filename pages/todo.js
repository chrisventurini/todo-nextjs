import { connect } from 'react-redux';
import { Component } from 'react';
import Header from '../components/Header';

import '../styles.scss';

class TodoPage extends Component {
    static getInitialProps(props) {
        console.log(props);

        return {};
    }

    render () {
        return (
            <Header/>
        )
    }
}

export default connect()(TodoPage)
