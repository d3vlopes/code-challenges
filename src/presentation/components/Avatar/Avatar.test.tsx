import { screen } from '@testing-library/react';
import { vitest } from 'vitest';

import { render } from '@/__tests__/helpers';

import { Avatar, AvatarProps } from '.';

vitest.mock('next/image', () => ({
	default: () => <div data-testid="mock-image" />,
}));

const mock: AvatarProps = {
	image: {
		src: 'https://www.cdn.com/user.png',
		alt: 'Loren ipsum dolor',
	},
};

describe('<Avatar />', () => {
	it('should render image', () => {
		render(<Avatar {...mock} />);

		const image = screen.getByTestId('mock-image');

		expect(image).toBeInTheDocument();
	});

	it('should render with medium size by default', () => {
		const { container } = render(<Avatar {...mock} />);

		const wrapper = container.firstChild;

		expect(wrapper).toHaveStyle({
			width: '15rem',
			height: '15rem',
		});
	});

	it('should render with large size', () => {
		const { container } = render(<Avatar size="large" {...mock} />);

		const wrapper = container.firstChild;

		expect(wrapper).toHaveStyle({
			width: '18.5rem',
			height: '18.5rem',
		});
	});
});
