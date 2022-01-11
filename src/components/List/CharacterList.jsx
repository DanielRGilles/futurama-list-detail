import React from 'react'
import styles from './CharacterList.css'

export default function CharacterList({ characters }) {
    return (
        <div className={styles.container}>
           {characters.map((character) => <div  className={styles.character} key={character.name}>
               <img src={character.image} alt={character.name} />
               <h1>{character.name}</h1>
               <p>Species: {character.species}</p>
               <p>Age: {character.age}</p>
               <p>Profession: {character.job}</p>
           </div>)} 
        </div>
    )
}
