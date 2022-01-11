export const getAllCharacters = async () => {
    try {
        const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
        const characters = await res.json();

        return {
           data: characters.map((character) => ({
                name: character.name,
                image: character.PicUrl,
                species: character.Species,
                age: character.Age,
                job: character.Profession
            }) )
        }
    }
    catch (error) {
        console.error(error.message);
        return [];
    }
}