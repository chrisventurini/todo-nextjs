import Document, { Head, Main, NextScript } from 'next/document'
import CssBaseline from '@material-ui/core/CssBaseline';
import flush from 'styled-jsx/server';


class PageDocument extends Document {

    static async getInitialProps(context) {
        let pageContext;

        const page = context.renderPage(Component => {
            const WrappedComponent = props => {
                pageContext = props.pageContext;
                return (<Component {...props} />);
            };

            return WrappedComponent;
        });

        let css;
        if (pageContext) {
            css = pageContext.sheetsRegistry.toString();
        }

        return {
            ...page,
            pageContext,
            styles: (
                <React.Fragment>
                    <style
                        id="jss-server-side"
                        dangerouslySetInnerHTML={{ __html: css }}
                    />
                    {flush() || null}
                </React.Fragment>
            ),
        };
    }

    render() {
        return (
            <html>
                <Head>
                </Head>
                <CssBaseline/>
                <body>
                <Main />
                <NextScript />
                </body>
            </html>
        )
    }
}

export default PageDocument;
