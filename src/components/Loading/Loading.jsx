import React from 'react'
import styles from '../../App.css'

export default function Loading() {
    return (
        <div>
            <img className={styles.loading} src='pokeball.png' alt='...loading'/>
        </div>
    )
}
