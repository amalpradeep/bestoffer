import request from '@/libs/request'
import '@/styles/globals.css'
import { SWRConfig } from 'swr'
import 'react-loading-skeleton/dist/skeleton.css'

const Noop = ({ children }) => children

const swrConfig = {
  fetcher: url => request.get(url).then(res => res.data),
  revalidateOnFocus: false,
  errorRetryCount: 3
}

export function MyApp ({ Component, pageProps }) {
  const Layout = Component.Layout || Noop

  return (
    <SWRConfig value={swrConfig}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp
