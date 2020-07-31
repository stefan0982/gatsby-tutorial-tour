import React      from 'react'
import SingleTour from './SingleTour'
import styles from '../../css/items.module.css'

const Tours = ({tours}) => {
  return (
    <section className={styles.tours}>
      <h2>Our tours</h2>
      <div className={styles.center}>
        {tours.map( ({ node }) => (
          <SingleTour tour={node} key={node.id}/>
        ))}
      </div>
    </section>
  )
}

export default Tours
