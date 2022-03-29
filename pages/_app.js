import { CacheProvider } from "@emotion/react"
import { ThemeProvider } from '@mui/material/'
import CssBaseline from '@mui/material/CssBaseline'
import { SessionProvider } from 'next-auth/react'
import Layout from "../components/Layout"
import Head from 'next/head'
import createEmotionCache from '../utility/createEmotionCache'

import customTheme from '../styles/theme/customTheme'

const clientSideEmotionCache = createEmotionCache()


function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props

  return (
    <SessionProvider>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Head>
            <title>Mira</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
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
