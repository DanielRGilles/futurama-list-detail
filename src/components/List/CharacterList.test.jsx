import {render } from  '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterList from './CharacterList';



describe('Header component test', () => {
  
    it('renders the top nav header', () => {
       const { container } = render(
            <MemoryRouter>
                
                     <CharacterList characters={characters}/>
               
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
         
    })

})



const characters = [
    {
        "id": "5ff4fb7cd89993a89cc6563f",
        "name": "abomasnow",
        "image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/460.png",
        "type": "grass",
        "color": "#7FCB70"
    },
    {
        "id": "5ff4fb7cd89993a89cc65641",
        "name": "abomasnow-mega",
        "image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/460_f2.png",
        "type": "grass",
        "color": "#7FCB70"
    },
    {
        "id": "5ff4fb7cd89993a89cc65488",
        "name": "abra",
        "image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
        "type": "psychic",
        "color": "NA"
    },
    {
        "id": "5ff4fb7cd89993a89cc655cb",
        "name": "absol",
        "image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png",
        "type": "dark",
        "color": "NA"
    },
]
