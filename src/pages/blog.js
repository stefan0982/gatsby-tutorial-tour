import React, { Component } from 'react'
import Layout               from '../components/Layout'
import styles               from '../components/Blog.module.css'

class Blog
  extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.blog}>
          <h1 className={ styles.title }>This is styled title</h1>
          this is our blog page
          <h2>This is second heading capitalized</h2>
        </div>

      </Layout>
    )
  }
}

export default Blog