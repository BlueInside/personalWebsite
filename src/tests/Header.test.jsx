import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from '../components/Header';

describe('Header component', () => {
  it('renders header with navigation links', () => {
    render(<Header />);

    expect(screen.getByText(/i'm header/i)).toBeInTheDocument();
  });
});
