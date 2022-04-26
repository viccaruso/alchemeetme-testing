import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render the header with an image, profile name', async () => {
    render(
      <App />
    );

    const image = screen.getByAltText('Alchemy Logo');
    screen.findByText(/^Meet \w+!$/i);
    expect(image).toBeInTheDocument();
   
  })
  
})