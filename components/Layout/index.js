import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div id='root'>
      <header className=''>
        <Header />
      </header>
      <main className=''>{children}</main>
    </div>
  )
}

export default Layout
