import React       from 'react'
import Layout      from '../components/Layout'
import Tours       from '../components/Tours/Tours'
import { graphql } from 'gatsby'

const ToursPage = ({data}) => {
  return (
    <Layout>
      <Tours tours={data.tours.edges}/>
    </Layout>
  )
}

export const getTours = graphql`
    {
        tours:allContentfulTour{
            edges {
                node {
                    name
                    price
                    slug
                    country
                    id:contentful_id
                    days
                    images {
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

export default ToursPage
