import { MATOMO_SITE_ID, MATOMO_URL } from "@/tracking";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Matomo tracking code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var _paq = window._paq = window._paq || [];
                /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);
                (function() {
                  var u="${MATOMO_URL}/";
                  _paq.push(['setTrackerUrl', u+'matomo.php']);
                  _paq.push(['setSiteId', '${MATOMO_SITE_ID}']);
                  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                  g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Optional: For debugging tracking events */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                /* Debug code to see what's being tracked */
                if (window._paq) {
                  const originalPush = window._paq.push;
                  window._paq.push = function(args) {
                    console.log('Matomo tracking:', args);
                    return originalPush.apply(this, arguments);
                  };
                }
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
