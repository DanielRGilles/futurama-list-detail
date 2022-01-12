import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.css'

export default function Home() {
    return (
        <div>
            <div><Link to='/characters' ><img className={styles.ball} src="Pokeball.png" alt="a pokeball" /></Link></div>
        </div>
    )
}
