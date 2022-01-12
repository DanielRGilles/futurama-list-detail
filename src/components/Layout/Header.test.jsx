import {render } from  '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Header';

describe('Header component test', () => {
  
    it('renders the top nav header', () => {
       const { container } = render(
            <MemoryRouter>
                
                     <Header/>
               
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
         
    })

})