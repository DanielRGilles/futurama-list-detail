import {render } from  '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Loading from './Loading';

describe('Header component test', () => {
  
    it('renders the top nav header', () => {
       const { container } = render(
            <MemoryRouter>
                
                     <Loading/>
               
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
         
    })

})