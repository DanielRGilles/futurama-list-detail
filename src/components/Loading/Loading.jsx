import React from 'react'
import styles from '../../App.css'
import pokeball from '../../assets/pokeball.png'

export default function Loading() {
    return (
        <div>
            <img className={styles.loading} src={pokeball} alt='...loading'/>
        </div>
    )
}
