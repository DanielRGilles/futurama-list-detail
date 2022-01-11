import React, { useEffect, useState } from 'react'
import CharacterList from '../../components/List/CharacterList';
import { getPokemon } from '../../services/pokemonApi';

export default function List() {
    const [ characters, setCharacters ] = useState([])
    const [ loading, setLoading ] = useState(true);
    const [ dir, setDir ] = useState('asc')
    const [ sortVar, setSortVar ] = useState('pokemon')
    useEffect(() => {
        setLoading(true);
        getPokemon(1, 25, sortVar, dir)
          .then((res) => {
            setCharacters(res.data);
          })
          .finally(() => setLoading(false));
      }, []);

    return (
        <>
            {loading ? '....Loading' :
            <CharacterList characters={characters} />}
           
        </>
    )
}
