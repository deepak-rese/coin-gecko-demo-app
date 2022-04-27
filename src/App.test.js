import { render, screen } from '@testing-library/react';
import {Description} from './components/Description';

test('renders Description', () => {
  render(<Description heading="Profile"/>);
  const linkElement = screen.getByText(/Profile/);
  expect(linkElement).toBeInTheDocument();
});
