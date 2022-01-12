import {render } from  '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DetailPokemon from './DetailPokemon';


describe('Header component test', () => {
    const pokemon = {ability1: "snow-warning",
    ability2: "NA",
    color: "#78C850",
    height: 22,
    hp: 90,
    id: "5ff4fb7cd89993a89cc6563f",
    image: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/460.png",
    name: "abomasnow",
    type: "grass",
    weight: 1355}
    
    it('renders a detail view of  a pokemon', () => {
       const { container } = render(
            <MemoryRouter>
                
                     <DetailPokemon pokemon={pokemon}/>
               
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
         
    })

})