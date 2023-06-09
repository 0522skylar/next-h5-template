import '../styles/globals.scss'
import 'antd-mobile/2x/es/global'

import FlexibleHead from '@components/FlexibleHead'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FlexibleHead />
      {process.env.VCONSOLE && (
        <>
          <Script
            id='vconsole'
            strategy='beforeInteractive'
            src='https://static-ai.61info.com/pjx/h5/vconsole.min.js'
          />
          <Script
            id='createVconsole'
            dangerouslySetInnerHTML={{
              __html: `
            var vConsole = new VConsole();
            `,
            }}
          />
        </>
      )}
      <Component {...pageProps} />
    </>
  )
}
