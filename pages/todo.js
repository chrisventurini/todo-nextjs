import { connect } from 'react-redux';
import { Component } from 'react';
import Header from '../components/Header';

import '../styles.scss';

class TodoPage extends Component {

    render () {
        return (
            <Header/>
        )
    }

}

export default connect()(TodoPage)
