import { connect } from 'react-redux';
import { Component } from 'react';
import Header from '../components/Header';
import fetch from 'isomorphic-unfetch'

import '../styles.scss';

class TodoPage extends Component {
    static async getInitialProps(props) {
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
