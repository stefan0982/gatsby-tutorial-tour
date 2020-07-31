import React from 'react'
import { FaMap } from 'react-icons/fa'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'

import { Link } from 'gatsby'

import PropTypes from 'prop-types'

const SingleTour = ({ tour }) => {
  console.log( tour )
  const { name, price, slug, images, country, days } = tour
  const mainImage = images[0].fluid
  return (
    <article className={ styles.tour }>
      <div className={ styles.imgContainer }>
        <Image
          fluid={ mainImage }
          className={ styles.img }
          alt={ slug }
        />
        <Link
          to={ `/tours/${ slug }` }
          className={ styles.link }
        >details</Link>
      </div>
      <div className={ styles.footer }>
        <h3>{ name }</h3>
        <div className={ styles.info }>
          <h4 className={styles.country}><FaMap className={styles.icon}/> { country }</h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

SingleTour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired
  })
}

export default SingleTour
