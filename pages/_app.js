import { CacheProvider } from "@emotion/react"
import { ThemeProvider, CssBaseline } from '@mui/material'
import Layout from "../components/Layout"
import { SessionProvider } from 'next-auth/react'

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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  )
}

export default MyApp
