import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailPokemon from '../../components/Detail/DetailPokemon';
import Loading from '../../components/Loading/Loading';
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
      <>
        {loading ? <Loading/> : <div className={styles.detail}>
            <div></div>
           <DetailPokemon pokemon={pokemon}/>
            <div></div>
             
        </div>}
        </>
    )
}
