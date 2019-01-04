import Document, { Head, Main, NextScript } from 'next/document'
import CssBaseline from '@material-ui/core/CssBaseline';


class MyDocument extends Document {
    render() {

        return (
            <html>
                <Head>
                </Head>
                <CssBaseline/>
                <body className="custom_class">
                <Main />
                <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument;
