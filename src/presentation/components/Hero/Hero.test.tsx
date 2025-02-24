import { act, render, screen, userEvent } from '@/__tests__/helpers';

import { heroMock as mock } from './mock';

import { Hero } from '.';

describe('<Hero />', () => {
	beforeEach(() => {
		document.body.innerHTML = `
		<div id="modal-root" />
		`;

		render(<Hero {...mock} />);
	});

	it('should render title', () => {
		const title = screen.getByRole('heading');

		expect(title).toBeInTheDocument();
	});

	it('should render description', () => {
		const description = screen.getByText(mock.description);

		expect(description).toBeInTheDocument();
	});

	it('should render checkout button as anchor', () => {
		const anchor = screen.getByRole('link');

		expect(anchor).toHaveAttribute('href', mock.buttons.checkoutButton.href);
		expect(anchor).toHaveTextContent(mock.buttons.checkoutButton.text);
	});

	it('should render demo button', () => {
		const demoButton = screen.getByRole('button');

		expect(demoButton).toHaveTextContent(mock.buttons.videoButton.text);
	});

	it('should render technologies icons', () => {
		for (const technologiesIcon of mock.technologiesIcons) {
			const icon = screen.getByRole('img', { name: technologiesIcon.alt });

			expect(icon).toHaveAttribute('src', technologiesIcon.src);
		}
	});
});
