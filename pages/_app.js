import React from 'react';
import App, {Container} from 'next/app';
import { Provider } from 'react-redux';

import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName }
    from '@material-ui/core/styles';

import store from '../store';

const CONTEXT_SYMBOL_KEY = Symbol.for('PAGE_CONTEXT');

import '../global.scss';

class ToDoApp extends App {

    constructor(props) {
        super(props);

        this.pageContext = this._createPageContext();
    }

    _createPageContext() {
        let globalSymbols = Object.getOwnPropertySymbols(global);

        if(!process.browser || globalSymbols.indexOf(CONTEXT_SYMBOL_KEY) === -1) {
            global[CONTEXT_SYMBOL_KEY] = {
                theme: createMuiTheme({
                    typography: {
                        useNextVariants: true,
                    },
                }),
                sheetsManager: new Map(),
                sheetsRegistry: new SheetsRegistry(),
                generateClassName: createGenerateClassName()
            }
        }

        return global[CONTEXT_SYMBOL_KEY];
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render () {
        const {Component, pageProps} = this.props,
            context = this.pageContext;

        return (
            <JssProvider registry={context.sheetsRegistry} generateClassName={context.generateClassName}>
                <MuiThemeProvider theme={context.theme} sheetsManager={context.sheetsManager}>
                    <Container>
                        <Provider store={ store }>
                            <Component pageContext={context} {...pageProps} />
                        </Provider>
                    </Container>
                </MuiThemeProvider>
            </JssProvider>
        )
    }
}

export default ToDoApp;