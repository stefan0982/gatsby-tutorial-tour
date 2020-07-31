import React                      from 'react'
import { graphql, Link }          from 'gatsby'
import Layout                     from '../components/Layout'
import styles                     from '../css/template.module.css'
import Image                      from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/all'

const TourTemplate = ({ data }) => {
  const { days, price, start, name, country, description: { description }, images, journey } = data.tour
  return (
    <Layout>
      <section className={ styles.template }>
        <div className={ styles.center }>
          <div className={ styles.images }>
            { images.map( (image, index) => (
              <Image
                fluid={ image.fluid }
                key={ index }
                alt={ name }
                className={ styles.image }
              />
            ) ) }
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon}/>
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon}/>
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={styles.desc}>
            {description}
          </p>
          <h2>Daily schedule</h2>
          <ul className={styles.journey}>
            {journey.map((item, id) => (
              <li key={id}>{item.day}</li>
            ))}
          </ul>
          <Link to="/tours">Back to Tours</Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        tour: contentfulTour(slug: {eq: $slug}) {
            images {
                fluid {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            description {
                description
            }
            name
            price
            country
            days
            start(formatString: "dddd MMMM Do, YYYY")
            journey {
                day
            }
        }
    }
`

export default TourTemplate
