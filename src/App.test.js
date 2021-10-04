import { render, screen } from '@testing-library/react';
import App from './App';

console.log('I am running a test!');
test('renders \'I am running!\'', () => {
  render(<App />);
  const linkElement = screen.getByText(/I am running!/i);
  expect(linkElement).toBeInTheDocument();
});
