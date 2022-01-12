import React from 'react'
import styles from '../../views/Detail/Detail.css'
import colors from '../List/CharacterList.css'
export default function DetailPokemon({pokemon}) {
    const {image, type, name, color, hp, height, weight, ability1, ability2} = pokemon;
    return (
        <>
             <section className={styles.container + ' ' + colors[`${type}`]}>
                <img src={image}/>
                <h3>{name}</h3>
                <p>HP: {hp}</p>
                <p>Height: {height} </p>
                <p>Weight: {weight} pounds</p>
                <p>Ability 1:{ability1}</p>
                <p>Ability 2:{ability2}</p>
                <p>Color: {color}</p>

            </section>
            {console.log(pokemon)}
        </>
    )
}
