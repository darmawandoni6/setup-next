/* eslint-disable react/react-in-jsx-scope */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta charSet="utf-8" />
          {/* <link
            rel="icon"
            type="image/png"
            href={require("@images/apollo.png")}
          /> */}
          {/* <link rel="apple-touch-icon" href={require("@images/apollo.png")} /> */}
          <meta name="theme-color" content="#209850" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
