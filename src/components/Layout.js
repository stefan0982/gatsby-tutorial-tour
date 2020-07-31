import React  from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <h2 className="blog-title">Blog Title</h2>
      <Navbar />
      <main>
        { children }
      </main>
    </>
  )
}

export default Layout
