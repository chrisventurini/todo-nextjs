import App, {Container} from 'next/app';
import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';

class ToDoApp extends App {
    render () {
        const {Component, pageProps} = this.props;

        return (
            <Container>
                <Provider store={ store }>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default ToDoApp;