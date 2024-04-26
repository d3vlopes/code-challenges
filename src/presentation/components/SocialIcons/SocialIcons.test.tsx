import { render, screen } from '@/__tests__/helpers';

import { socialIconsMock as mock } from './mock';

import { SocialIcons } from '.';

const { getAllByRole, getByTitle } = screen;

describe('<SocialIcons />', () => {
	beforeEach(() => render(<SocialIcons {...mock} />));

	it('should render correct image length', () => {
		const imagens = getAllByRole('img');

		expect(imagens).toHaveLength(mock.items.length);
	});

	it('should render anchor element under each icons', () => {
		const anchors = getAllByRole('link');

		expect(anchors).toHaveLength(mock.items.length);
	});

	it('should render anchor with correct href value', () => {
		for (const item of mock.items) {
			const anchor = getByTitle(item.name);

			expect(anchor).toHaveAttribute('href', item.href);
		}
	});

	it('should open href in a new tab', () => {
		for (const item of mock.items) {
			const anchor = getByTitle(item.name);

			expect(anchor).toHaveAttribute('target', '_blank');
		}
	});
});
