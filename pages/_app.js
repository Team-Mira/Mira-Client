import { CacheProvider } from "@emotion/react"
import { ThemeProvider, CssBaseline } from '@mui/material'
import Layout from "../components/Layout"
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'

import createEmotionCache from '../utility/createEmotionCache'
import darkTheme from '../styles/theme/darkTheme'

const clientSideEmotionCache = createEmotionCache()


function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props

  return (
    <SessionProvider>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  )
}

export default MyApp
