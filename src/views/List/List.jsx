import React, { useEffect, useState } from 'react'
import CharacterList from '../../components/List/CharacterList';
import { getAllCharacters } from '../../services/futuramaApi';

export default function List() {
    const [ characters, setCharacters ] = useState([])
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setLoading(true);
        getAllCharacters()
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
