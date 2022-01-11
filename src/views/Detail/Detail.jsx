import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailPokemon from '../../components/Detail/DetailPokemon';
import { getPokemonById } from '../../services/pokemonApi';
import styles from './Detail.css'

export default function Detail() {
    const { id } = useParams();
    const [loading, setLoading ] = useState(true)
    const [ pokemon, setPokemon ] = useState({})

    useEffect(() => {
        setLoading(true);
        getPokemonById(id)
          .then((res) => {
            setPokemon(res.data);
          })
          .finally(() => setLoading(false));
      }, []);


    return (
        <div className={styles.detail}>
            <div></div>
           <DetailPokemon pokemon={pokemon}/>
            <div></div>
             {console.log(pokemon)}
        </div>
    )
}
