import React      from 'react'
import Layout     from '../components/Layout'
import { Button } from '../components/Button'

export default function Home() {
  return (
    <Layout>

      <h1>this is our home page</h1>
      <div className="container">
        <div className="row">
          <div className="col-4">Hello</div>
          <div className="col-4">Hello </div>
          <div className="col-4">Hello</div>
          <Button>Styled button</Button>
        </div>
      </div>
    </Layout>
  )
}
