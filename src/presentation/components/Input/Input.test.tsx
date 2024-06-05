import { render, screen } from '@/__tests__/helpers';

import { Input } from '.';

describe('<Input />', () => {
	it('should render input', () => {
		render(<Input label="Name" />);

		const input = screen.getByRole('textbox');

		expect(input).toBeInTheDocument();
	});

	it('should render label', () => {
		render(<Input label="Name" />);

		const label = screen.getByLabelText('Name');

		expect(label).toBeInTheDocument();
	});

	it('should render error', () => {
		render(<Input label="Name" error="Loren ipsum dolor" />);

		const errorMessage = screen.getByText('Loren ipsum dolor');

		expect(errorMessage).toBeInTheDocument();
	});
});
