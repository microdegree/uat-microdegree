import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1008527286273323') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
