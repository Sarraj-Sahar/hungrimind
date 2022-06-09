import Analytics from '@/components/analytics'
import { ClientReload } from '@/components/ClientReload'
import LayoutWrapper from '@/components/LayoutWrapper'
import '@/css/prism.css'
import '@/css/tailwind.css'
import siteMetadata from '@/data/siteMetadata'
import '@fontsource/inter/variable-full.css'
import 'katex/dist/katex.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'




const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" forcedTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
