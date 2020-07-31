import React                       from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled                      from 'styled-components'
import img                         from '../../static/mountain.jpeg'
import GatsbyImage                 from 'gatsby-image'

const getImages = graphql`
    {
        fixed: file(relativePath:{eq:"desert.jpeg"}) {
            childImageSharp {
                fixed(width: 300, height: 300, grayscale: true) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        fluid: file(relativePath:{eq:"desert2.jpeg"}) {
            childImageSharp {
                fluid{
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        example: file(relativePath:{eq:"desert3.jpeg"}) {
            childImageSharp {
                fluid(maxWidth:200){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const Images = () => {
  const data = useStaticQuery( getImages )

  return (
    <Wrapper>
      <article>
        <h3>Basic image</h3>
        <img
          src={ img }
          className="basic"
          alt="basic"
        />

      </article>
      <article>
        <h3>fixed image/blur</h3>
        <GatsbyImage
          fixed={ data.fixed.childImageSharp.fixed }
        />
      </article>
      <article>
        <h3>fluid image/svg</h3>
        <GatsbyImage fluid={ data.fluid.childImageSharp.fluid } />
      </article>
      <div className="small">
        <GatsbyImage fluid={ data.example.childImageSharp.fluid } />

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
text-align: center;
text-transform:capitalize;
width: 80vw;
margin: 0 auto 10rem auto;
.basic {
width: 100%;
}
.small {
width: 200px;
}
article {
border: 3px solid rebeccapurple;
padding: 1rem -0px;
}
@media(min-width: 992px) {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: 1rem;
}
`

export default Images
