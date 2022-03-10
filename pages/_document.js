import Document, { Html, Head, Main, NextScript } from "next/document";
import Pixel from '../components/Pixel'
import Clarity from '../components/Clarity'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/mdicon.png"/>
        <title>Micro Degree</title>
        <meta name="description"
         content="ಕನ್ನಡಿಗರಿಗೆ IT Job-Ready ಮಾಡುವ ಅಭಿಯಾನ"></meta>
           <div>
            <Pixel name='FACEBOOK_PIXEL_1' />
          </div>

          <div>
            <Clarity name='CLARITY_PIXEL_1' />
          </div>

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155317684-2"></script>
          <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-155317684-2', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
          <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "77n7r6x6vd")` }}
              />
        
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-625115666');` }}
              />

          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&display=swap'
            rel='stylesheet'
          ></link>
          <link
            rel='stylesheet'
            type='text/css'
            charset='UTF-8'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'
            integrity='sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=='
            crossorigin='anonymous'
          />
          
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
