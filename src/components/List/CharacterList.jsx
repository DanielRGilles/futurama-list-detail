import React from 'react'
import styles from './CharacterList.css'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function CharacterList({ characters }) {
    return (
        <div className={styles.container}>
           {characters.map(({id, image, name, type}) => <div  className={styles[`${type}`] + ' ' + styles.character} key={id}>
                <img src={image} alt={name} />
               <Link to={`/characters/${id}`}><h1>{ name }</h1></Link>
               <div>Type: {type}</div>
              
           </div>)} 
           {console.log([characters])}
        </div>
    )
}
