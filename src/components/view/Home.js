import React from 'react'
import { Helmet } from 'react-helmet'

import Categories from '../Categories/Index'
import Products from '../Products/Index'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bestoffers | Buy all Products in one</title>
        <meta name='description' content='Bestoofers' />
      </Helmet>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8'>
        <Categories />
        <Products />
      </div>
    </div>
  )
}

export default Home
