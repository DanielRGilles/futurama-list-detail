import { render, screen } from "@testing-library/react";
import { MemoryRouter  } from "react-router-dom";
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App from '../../App.jsx';

const server = setupServer(
    rest.get('https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=5&sort=pokemon&direction=asc', (req, res, ctx) => {
        return res(
            ctx.json({
                "count": 801,
                "page": "1",
                "perPage": "5",
                "sort": {
                    "by": "pokemon",
                    "direction": "asc"
                },
                "search": {},
                "results": [
                    {
                        "_id": "5ff4fb7cd89993a89cc6563f",
                        "pokemon": "abomasnow",
                        "id": 512,
                        "species_id": 460,
                        "height": 22,
                        "weight": 1355,
                        "base_experience": 173,
                        "type_1": "grass",
                        "type_2": "ice",
                        "attack": 92,
                        "defense": 75,
                        "hp": 90,
                        "special_attack": 92,
                        "special_defense": 85,
                        "speed": 60,
                        "ability_1": "snow-warning",
                        "ability_2": "NA",
                        "ability_hidden": "soundproof",
                        "color_1": "#78C850",
                        "color_2": "#98D8D8",
                        "color_f": "#7FCB70",
                        "egg_group_1": "monster",
                        "egg_group_2": "plant",
                        "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/460.png",
                        "generation_id": 4,
                        "evolves_from_species_id": "459",
                        "evolution_chain_id": 239,
                        "shape_id": 6,
                        "shape": "upright",
                        "pokebase": "abomasnow",
                        "pokedex": "http://www.pokemon.com/us/pokedex/abomasnow"
                    },
                    {
                        "_id": "5ff4fb7cd89993a89cc65641",
                        "pokemon": "abomasnow-mega",
                        "id": 513,
                        "species_id": 460,
                        "height": 27,
                        "weight": 1850,
                        "base_experience": 208,
                        "type_1": "grass",
                        "type_2": "ice",
                        "attack": 132,
                        "defense": 105,
                        "hp": 90,
                        "special_attack": 132,
                        "special_defense": 105,
                        "speed": 30,
                        "ability_1": "snow-warning",
                        "ability_2": "NA",
                        "ability_hidden": "NA",
                        "color_1": "#78C850",
                        "color_2": "#98D8D8",
                        "color_f": "#7FCB70",
                        "egg_group_1": "monster",
                        "egg_group_2": "plant",
                        "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/460_f2.png",
                        "generation_id": "NA",
                        "evolves_from_species_id": "NA",
                        "evolution_chain_id": "NA",
                        "shape_id": "NA",
                        "shape": "NA",
                        "pokebase": "abomasnow",
                        "pokedex": "http://www.pokemon.com/us/pokedex/abomasnow"
                    },
                    {
                        "_id": "5ff4fb7cd89993a89cc65488",
                        "pokemon": "abra",
                        "id": 69,
                        "species_id": 63,
                        "height": 9,
                        "weight": 195,
                        "base_experience": 62,
                        "type_1": "psychic",
                        "type_2": "NA",
                        "attack": 20,
                        "defense": 15,
                        "hp": 25,
                        "special_attack": 105,
                        "special_defense": 55,
                        "speed": 90,
                        "ability_1": "synchronize",
                        "ability_2": "inner-focus",
                        "ability_hidden": "magic-guard",
                        "color_1": "#F85888",
                        "color_2": "NA",
                        "color_f": "NA",
                        "egg_group_1": "humanshape",
                        "egg_group_2": "NA",
                        "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
                        "generation_id": 1,
                        "evolves_from_species_id": "NA",
                        "evolution_chain_id": 27,
                        "shape_id": 6,
                        "shape": "upright",
                        "pokebase": "abra",
                        "pokedex": "http://www.pokemon.com/us/pokedex/abra"
                    },
                    {
                        "_id": "5ff4fb7cd89993a89cc655cb",
                        "pokemon": "absol",
                        "id": 396,
                        "species_id": 359,
                        "height": 12,
                        "weight": 470,
                        "base_experience": 163,
                        "type_1": "dark",
                        "type_2": "NA",
                        "attack": 130,
                        "defense": 60,
                        "hp": 65,
                        "special_attack": 75,
                        "special_defense": 60,
                        "speed": 75,
                        "ability_1": "pressure",
                        "ability_2": "super-luck",
                        "ability_hidden": "justified",
                        "color_1": "#705848",
                        "color_2": "NA",
                        "color_f": "NA",
                        "egg_group_1": "ground",
                        "egg_group_2": "NA",
                        "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png",
                        "generation_id": 3,
                        "evolves_from_species_id": "NA",
                        "evolution_chain_id": 185,
                        "shape_id": 8,
                        "shape": "quadruped",
                        "pokebase": "absol",
                        "pokedex": "http://www.pokemon.com/us/pokedex/absol"
                    },
                    {
                        "_id": "5ff4fb7cd89993a89cc655ce",
                        "pokemon": "absol-mega",
                        "id": 397,
                        "species_id": 359,
                        "height": 12,
                        "weight": 490,
                        "base_experience": 198,
                        "type_1": "dark",
                        "type_2": "NA",
                        "attack": 150,
                        "defense": 60,
                        "hp": 65,
                        "special_attack": 115,
                        "special_defense": 60,
                        "speed": 115,
                        "ability_1": "magic-bounce",
                        "ability_2": "NA",
                        "ability_hidden": "NA",
                        "color_1": "#705848",
                        "color_2": "NA",
                        "color_f": "NA",
                        "egg_group_1": "ground",
                        "egg_group_2": "NA",
                        "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/359_f2.png",
                        "generation_id": "NA",
                        "evolves_from_species_id": "NA",
                        "evolution_chain_id": "NA",
                        "shape_id": "NA",
                        "shape": "NA",
                        "pokebase": "absol",
                        "pokedex": "http://www.pokemon.com/us/pokedex/absol"
                    }
                ]
            })
      );
    })
);

describe('Character detail test', () => {
    beforeAll(() => {
        server.listen();
    });
    afterAll(() => {
        server.close();
    });

    it('renders a list of characters', async () => {
        render(
            <MemoryRouter initialEntries={['/characters']}>
                <App/>
            </MemoryRouter>
        );
        
        await screen.findByText('abomasnow')
    })
    it('renders the app', async () => {
        const screen = await render(
            <MemoryRouter initialEntries={['/characters/1']}>
                <App/>
            </MemoryRouter>
        );
        
        
       expect(screen).toMatchSnapshot
       
        
    })

})