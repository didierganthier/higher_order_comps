import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders loading state initially', () => {
  render(<App />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test('renders user info after loading', async () => {
  render(<App />);
  const nameElement = await screen.findByText(/Didier Ganthier/i);
  const emailElement = await screen.findByText(/didierganthierperan@gmail.com/i);
  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
});
