import React  from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const Error = () => {
  return (
    <Layout>
      <section style={{ padding: "4rem 0", textAlign: "center" }}>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Back to Home</Link>
      </section>
    </Layout>
  )
}

export default Error
