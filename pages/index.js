import Categories from '@/components/Categories/Index'
import Layout from '@/components/Layout'
import Products from '@/components/Products/Index'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='title' content='Home' />
        <meta name='description' content='Home' />
      </Head>
      <div>
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8'>
          <Categories />
          <Products />
        </div>
      </div>
    </>
  )
}

Home.Layout = Layout
export default Home
