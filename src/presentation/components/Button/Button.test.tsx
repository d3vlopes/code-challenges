import { render, screen } from '@/__tests__/helpers';

import { theme } from '@/presentation/styles/theme';

import { Button } from '.';

const { getByRole, queryByRole } = screen;

describe('<Button />', () => {
	it('should render button', () => {
		render(<Button>Children</Button>);

		const button = getByRole('button', { name: 'Children' });

		expect(button).toHaveStyle({
			background: `${theme.colors.gradient}`,
		});
	});

	it('should render as anchor element', () => {
		render(
			<Button asChild>
				<a href="/">Children</a>
			</Button>,
		);

		const anchor = getByRole('link');
		const button = queryByRole('button');

		expect(anchor).toBeInTheDocument();
		expect(button).not.toBeInTheDocument();
	});

	it('should render disabled state with styles', () => {
		render(<Button disabled>Children</Button>);

		const button = getByRole('button');

		expect(button).toHaveStyle({
			opacity: 0.7,
			cursor: 'not-allowed',
		});
	});

	it('should render outline variant', () => {
		render(<Button variant="outline">Children</Button>);

		const button = getByRole('button');

		expect(button).toHaveStyle({
			background: 'transparent',
			border: `1px solid ${theme.colors.grey[100]}`,
		});
	});
});
