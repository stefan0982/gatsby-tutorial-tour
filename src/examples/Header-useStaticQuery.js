import React                       from 'react'
import Layout                      from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`

const HeaderUseStaticQuery = () => {
  const { site: { siteMetadata: { author, title, description } } } = useStaticQuery(
    getData )

  // const { site : { siteMetadata:info } } in asa mod redenumim datele
  // structurate

  return (
    <Layout>
      <h1>Author: { author }</h1>
      <h1>title: { title }</h1>
      <h1>description: { description }</h1>
    </Layout>
  )
}

export default HeaderUseStaticQuery
