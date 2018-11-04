import App, {Container} from 'next/app';
import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';

import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';

// Sets up the material ui
const sheetsRegistry = new SheetsRegistry();
const sheetsManager = new Map();
const theme = createMuiTheme();
const generateClassName = createGenerateClassName();


class ToDoApp extends App {
    render () {
        const {Component, pageProps} = this.props;

        return (
            <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                    <Container>
                        <Provider store={ store }>
                            <Component {...pageProps} />
                        </Provider>
                    </Container>
                </MuiThemeProvider>
            </JssProvider>
        )
    }
}

export default ToDoApp;