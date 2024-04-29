import { vitest } from 'vitest';

import { fireEvent, render, screen } from '@/__tests__/helpers';

import { headerMock as mock } from './mock';

import { Header } from '.';

vitest.mock('@/presentation/components/Logo', () => ({
	Logo: () => <div data-testid="mock-logo" />,
}));

vitest.mock('@/presentation/components/SocialIcons', () => ({
	SocialIcons: () => <div data-testid="mock-social-icons" />,
}));

const { getByTestId, getByLabelText, getByText, getAllByRole } = screen;

describe('<Header />', () => {
	it('should render Logo', () => {
		render(<Header {...mock} />);

		const logo = getByTestId('mock-logo');

		expect(logo).toBeInTheDocument();
	});

	it('should render navigation links', () => {
		render(<Header {...mock} />);

		for (const item of mock.navigationLinks) {
			const navigationAnchor = getByLabelText(item.text);
			const navigationItem = getByText(item.text);

			expect(navigationAnchor).toHaveAttribute('href', item.href);
			expect(navigationItem).toBeInTheDocument();
		}
	});

	it('should render SocialIcons', () => {
		render(<Header {...mock} />);

		const socialIcons = getByTestId('mock-social-icons');

		expect(socialIcons).toBeInTheDocument();
	});

	it('should handle the open/close mobile menu ', () => {
		render(<Header {...mock} />);

		const [hamburgerButton] = getAllByRole('button');
		const navigation = getByLabelText('Navegação principal');

		expect(hamburgerButton).toHaveAttribute('aria-label', 'Abrir menu');
		expect(navigation.getAttribute('aria-hidden')).toBe('true');
		expect(navigation).toHaveStyle({
			opacity: 0,
			visibility: 'hidden',
		});

		fireEvent.click(hamburgerButton);

		expect(hamburgerButton).toHaveAttribute('aria-label', 'Fechar menu');
		expect(navigation.getAttribute('aria-hidden')).toBe('false');
		expect(navigation).toHaveStyle({
			opacity: 1,
			visibility: 'visible',
		});
	});
});
