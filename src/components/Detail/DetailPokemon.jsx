import React from 'react'
import styles from '../../views/Detail/Detail.css'
export default function DetailPokemon({pokemon}) {
    return (
        <>
             <section className={styles.container}>
                <img src={pokemon.image}/>
                <h3>{pokemon.name}</h3>

            </section>
        </>
    )
}
