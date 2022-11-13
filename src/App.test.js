import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header component', () => {
  render(<App />);
  const headerElement = screen.getByText(/nossas lojas por todo brasil/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders main component', () => {
  render(<App />);
  const mainElement = screen.getByText(/adicionar ao carrinho/i);
  expect(mainElement).toBeInTheDocument();
});

test('renders register component', () => {
  render(<App />);
  const registerElement = screen.getByText(/receba novidades/i);
  expect(registerElement).toBeInTheDocument();
});

test('renders suggestions component', () => {
  render(<App />);
  const suggestionsElement = screen.getByText(/você também pode gostar/i);
  expect(suggestionsElement).toBeInTheDocument();
});

test('renders footer component', () => {
  render(<App />);
  const footerElement = screen.getByText(/all rights reserved/i);
  expect(footerElement).toBeInTheDocument();
});
