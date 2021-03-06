import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
            defer
          ></script>
          <script defer src="https://js.appointlet.com/"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
