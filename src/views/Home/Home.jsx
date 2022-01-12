import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.css'
import pokeball from '../../assets/pokeball.png'

export default function Home() {
    return (
        <div>
            <div><Link to='/characters' ><img className={styles.ball} src={pokeball} alt="a pokeball" /></Link></div>
        </div>
    )
}
