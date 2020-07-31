const path = require( 'path' )

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions

  const { data } = await graphql( `
    {
      tours:allContentfulTour{
      edges {
        node {
          slug
        }
      }
    }
  } ` )
  data.tours.edges.forEach( ({ node }) => {
    createPage( {
      path     : `/tours/${ node.slug }`,
      component: path.resolve( './src/templates/tourTemplate.js' ),
      context  : {
        slug: node.slug,
      },
    } )
  } )
}