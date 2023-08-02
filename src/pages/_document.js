import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-...tuIntegridadAquí..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/*  Required Core Stylesheet */}
        <link
          rel="stylesheet"
          href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"
        ></link>

        {/* Optional Theme Stylesheet  */}
        <link
          rel="stylesheet"
          href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
