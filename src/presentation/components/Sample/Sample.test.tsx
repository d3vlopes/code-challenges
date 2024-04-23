import { render, screen } from '@testing-library/react';

import { Test } from '.';

describe('<Sample />', () => {
  it('should ', () => {
    render(<Test />);

    const heading = screen.getByRole('heading', { name: 'Hello World' });

    expect(heading).toBeInTheDocument();
  });
});
