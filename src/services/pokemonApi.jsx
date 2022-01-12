export const getPokemon = async ( page,  perPage, sortVar, dir ) => {
    try {
        const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=${page}&perPage=${perPage}&sort=${sortVar}&direction=${dir}`);
        const { results } = await res.json();

        return {
           data: results.map((character) => ({
                id: character._id,
                name: character.pokemon,
                image: character.url_image,
                type: character.type_1,
                color: character.color_f
               
            }) )
        }
    }
    catch (error) {
        console.error(error.message);
        return [];
    }
}
export const getPokemonById = async (id) => {
    try {
        const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`);
        const pokemon = await res.json();

        return {
           data: {
                id: pokemon._id,
                name: pokemon.pokemon,
                image: pokemon.url_image,
                type: pokemon.type_1,
                color: pokemon.color_1,
                hp: pokemon.hp,
                height: pokemon.height,
                weight: pokemon.weight,
                ability1: pokemon.ability_1,
                ability2: pokemon.ability_2
           }
            
        }
    }
    catch (error) {
        console.error(error.message);
        return [];
    }
}



