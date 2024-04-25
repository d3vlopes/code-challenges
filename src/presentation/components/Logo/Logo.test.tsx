import { render, screen } from '@/__tests__/helpers';

import { Logo, LogoProps } from '.';

const mock: LogoProps = {
	src: 'https://www.cnd.com/logo.svg',
	alt: 'Loren ipsum dolor',
};

const { getByRole } = screen;

describe('<Logo />', () => {
	it('should render image', () => {
		render(<Logo {...mock} />);

		const image = getByRole('img', { name: mock.alt });

		expect(image).toHaveAttribute('src', mock.src);
	});

	it('should render <a> element around <img> with correct href for target', () => {
		render(<Logo {...mock} />);

		const link = getByRole('link');

		expect(link).toHaveAttribute('href', '#');
	});
});
