import { act, fireEvent, render, screen } from '@/__tests__/helpers';

import { generateID } from '@/utils/generate-id';

import { ChallengeCard, ChallengeCardProps } from '.';

const { getByRole, getAllByRole, getByText } = screen;

const mock: ChallengeCardProps = {
	title: 'Challenge 001',
	technologies: [
		{
			id: generateID(),
			name: 'React',
			icon: {
				src: 'https://www.cdn.com/icon.svg',
				alt: 'Loren ipsum dolor',
			},
		},
	],
	description: 'Loren ipsum dolor',
};

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

describe('<ChallengeCard />', () => {
	it('should render title', () => {
		render(<ChallengeCard {...mock} />);

		const title = getByRole('heading', { name: mock.title });

		expect(title).toBeInTheDocument();
	});

	it('should render technologies heading', () => {
		render(<ChallengeCard {...mock} />);

		const heading = getByRole('heading', {
			name: 'Stack que você vai utilizar',
		});

		expect(heading).toBeInTheDocument();
	});

	it('should render technologies icons', () => {
		render(<ChallengeCard {...mock} />);

		const technologiesIcons = getAllByRole('img');

		expect(technologiesIcons).toHaveLength(mock.technologies.length);
	});

	it('should render description', () => {
		render(<ChallengeCard {...mock} />);

		const description = getByText(mock.description);

		expect(description).toBeInTheDocument();
	});
});
