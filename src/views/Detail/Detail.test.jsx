import { render, screen } from "@testing-library/react";
import { MemoryRouter  } from "react-router-dom";
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App from '../../App.jsx';

const server = setupServer(
    rest.get('https://pokedex-alchemy.herokuapp.com/api/pokedex/5ff4fb7cd89993a89cc6563f', (req, res, ctx) => {
        return res(
            ctx.json({
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

    it('renders a specific character', async () => {
        render(
            <MemoryRouter initialEntries={['/characters/5ff4fb7cd89993a89cc6563f']}>
                <App/>
            </MemoryRouter>
        );
        
        await screen.findByText('abomasnow')
    })
    it('renders the app', async () => {
        const screen = await render(
            <MemoryRouter initialEntries={['/characters/5ff4fb7cd89993a89cc6563f']}>
                <App/>
            </MemoryRouter>
        );
        
        
       expect(screen).toMatchSnapshot
       
        
    })

})