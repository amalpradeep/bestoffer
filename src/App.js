import React from 'react'
import { SWRConfig } from 'swr'

import Layout from './components/Layout'
import View from './components/view'
import request from './libs/request'

import 'react-loading-skeleton/dist/skeleton.css'
import './App.css'

const swrConfig = {
  fetcher: url => request.get(url).then(res => res.data),
  revalidateOnFocus: false,
  errorRetryCount: 3
}

function MyApp () {
  return (
    <SWRConfig value={swrConfig}>
      <Layout>
        <View />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp
