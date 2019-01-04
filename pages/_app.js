import App, {Container} from 'next/app';
import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName }
    from '@material-ui/core/styles';

const sheetsRegistry = new SheetsRegistry();
const sheetsManager = new Map();
const theme = createMuiTheme();
const generateClassName = createGenerateClassName();


class ToDoApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }
    render () {
        const {Component, pageProps} = this.props;
        return (
            <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                    <CssBaseline />
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