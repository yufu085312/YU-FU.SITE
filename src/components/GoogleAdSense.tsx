import Script from 'next/script'

export default function GoogleAdSense() {
  const ADSENSE_PUBLISHER_ID = 'ca-pub-8099321151173571'

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
