import { render, screen } from '@/__tests__/helpers';

import { generateID } from '@/utils/generate-id';

import { Select, SelectProps } from '.';

const mock: SelectProps = {
	name: 'tracks',
	label: 'Trilha',
	options: [
		{
			id: generateID(),
			text: 'Option 1',
			value: 'option-1',
		},
	],
};

describe('<Select />', () => {
	it('should render select', () => {
		render(<Select {...mock} />);

		const select = screen.getByRole('combobox');

		expect(select).toBeInTheDocument();
	});

	it('should render options', () => {
		render(<Select {...mock} />);

		for (const item of mock.options) {
			const option = screen.getByText(item.text);

			expect(option).toBeInTheDocument();
		}
	});

	it('should render label', () => {
		render(<Select {...mock} />);

		const label = screen.getByLabelText('Trilha');

		expect(label).toBeInTheDocument();
	});

	it('should not render label if not value is provided', () => {
		render(<Select name={mock.name} options={mock.options} />);

		const label = screen.queryByLabelText('Trilha');

		expect(label).not.toBeInTheDocument();
	});
});
