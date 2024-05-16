import { render, screen } from '@/__tests__/helpers';

import { generateID } from '@/utils/generate-id';

import { Highlights, HighlightsProps } from '.';

const mock: HighlightsProps = {
	items: [
		{
			id: generateID(),
			image: {
				src: 'https://www.cdn.com/image.svg',
				alt: 'Loren ipsum dolor',
			},
			title: 'Ganhe experiência',
			description: 'Loren ipsum dolor',
		},
	],
};

describe('<Highlights />', () => {
	it('should render image', () => {
		render(<Highlights {...mock} />);

		const image = screen.getByRole('img', {
			name: mock.items[0].image.alt,
		});

		expect(image).toBeInTheDocument();
	});

	it('should render title', () => {
		render(<Highlights {...mock} />);

		const title = screen.getByRole('heading', { name: mock.items[0].title });

		expect(title).toBeInTheDocument();
	});

	it('should render description', () => {
		render(<Highlights {...mock} />);

		const description = screen.getByText(mock.items[0].description);

		expect(description).toBeInTheDocument();
	});

	it('should render correct highlights length', () => {
		render(<Highlights {...mock} />);

		const images = screen.getAllByRole('img');

		expect(images).toHaveLength(mock.items.length);
	});
});
