/* eslint-disable @next/next/inline-script-id */
/* eslint-disable react/jsx-no-comment-textnodes */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-CRJE5KEGP4`}
      />
      // eslint-disable-next-line
      @next/next/inline-script-id
      <Script strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-CRJE5KEGP4');
    `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
