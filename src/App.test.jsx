import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render the header with an image, profile name, and background color', async () => {
    render(
      <App />
    );

    screen.getByAltText('Alchemy Logo');

    waitFor(() => {
      screen.getByText(/^Meet \w+!$/i);
    })
      

  })
  
})