import Document, { Head, Main, NextScript } from "next/document";
import "bootstrap/dist/css/bootstrap.css";
// import "../static/foundation-6.5.1-custom/css/foundation.min.css";

export default class MyDocument extends Document {
  renderHead() {
    return (
      <Head>
        <meta name="description" content="Rovebus" />
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Bitter:700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
    );
  }

  render() {
    return (
      <html lang="en">
        <body>
          {this.renderHead()}
          <Main />
          <NextScript />
          {/*<!-- jQuery must be imported before Foundation -->*/}
          {/* <script src="js/jquery.min.js"></script> */}
          {/*<!-- this will include every plugin and utility required by Foundation -->*/}
          {/* <script src="js/foundation.min.js"></script> */}
        </body>
        <style global jsx>{`
          :root {
            /* BASE COLORS */
            --accent-color: #ee6d66;
            --charcoal-color: #343434;
            --background-color: rgb(205, 205, 205);
          }
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Bitter", sans-serif;
            font-size: 1rem;
          }
        `}</style>
      </html>
    );
  }
}
