import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.css'

export default function Header() {
    return (
        <div className={styles.header}>
          <div> <div><Link to='/'>Home</Link> </div>
          <div><Link to='/characters'>Characters</Link> </div></div>
          <div>
          <h1>Pokemon Pokedex</h1> 
          <section className={styles.links}>
         
          </section>
          </div>
          <div></div>
        </div>
    )
}
