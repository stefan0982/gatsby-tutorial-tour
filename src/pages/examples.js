import React                from 'react'
import HeaderUseStaticQuery from '../examples/Header-useStaticQuery'
import HeaderStaticQuery    from '../examples/Header-staticQuery'
import { graphql }          from 'gatsby'

const Examples = (props) => {
  console.log( props )
  return (
    <div>
      <h2>Examples page</h2>
      <br />
      <HeaderUseStaticQuery />
      <hr />
      <HeaderStaticQuery />
      <hr/>
      page query method(author loaded): {props.data.site.siteMetadata.author}
    </div>
  )
}

export const getData = graphql`
    {
        site {
            siteMetadata {
                author
            }
        }
    }
`

export default Examples
