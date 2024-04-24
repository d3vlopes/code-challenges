import { screen } from '@testing-library/react';

import { render } from '@/__tests__/helpers';

import { Sample } from '.';

describe('<Sample />', () => {
	it('should ', () => {
		render(<Sample title="Hello World" />);

		const heading = screen.getByRole('heading', { name: 'Hello World' });

		expect(heading).toBeInTheDocument();
	});
});
