import { render, screen, fireEvent } from '@testing-library/react';
import Cryptos from './components/Home/Stats';
import Header from './components/Home/Header';
import Login from './components/Login';

it('Test du composant Stats', async () => {
  
  render(<Cryptos />);
  screen.debug();
});

it('Test du composant Header', async () => {
  
  render(<Header />);
  screen.debug();
});


it('Test du composant Login', async () => {
  
  render(<Login />);
  screen.debug();
});

describe('Test du composant Login et de l\'input', () => {
  test('Test avant saisie', () => {
    render(<Login />);
    
    expect(screen.queryByText(/Utilisateur/)).toBeNull();
  });

  test('Test après saisie', () => {
    render(<Login/>);

    fireEvent.change(screen.getByRole('input', {name: /password/i}), {
      target: { value: '*********'}
    })

    expect(screen.queryByText(/Utilisateur/)).toBeInTheDocument();
  });
});

