import React       from 'react'
import { graphql, StaticQuery } from 'gatsby'


const getData = graphql` {
  site {
    siteMetadata {
      title
    }
  }
}
`
const HeaderStaticQuery = () => {
  return (
    <StaticQuery query={getData} render={data => (
      <div>data from graphql taken with StaticQuery: <h1>{data.site.siteMetadata.title}</h1></div>
    )}/>
  )
}

export default HeaderStaticQuery
