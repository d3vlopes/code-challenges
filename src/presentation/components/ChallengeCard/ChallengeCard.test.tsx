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
	buttonText: 'Visualizar detalhes',
	videoID: 'K4TOrB7at0Y',
	buttonModal: {
		text: 'Começar desafio',
		href: 'https://pay.hotmart.com/c4587ada7',
	},
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

	it('should render button', () => {
		render(<ChallengeCard {...mock} />);

		const button = getByRole('button', { name: mock.buttonText });

		expect(button).toBeInTheDocument();
	});

	it('should open modal on button click', () => {
		render(<ChallengeCard {...mock} />);

		const button = getByRole('button', { name: mock.buttonText });

		fireEvent.click(button);

		act(() => {
			const closeModalIcon = getByRole('img', { name: 'Fechar modal' });

			expect(closeModalIcon).toBeInTheDocument();
		});
	});

	it('should render title with open modal', () => {
		render(<ChallengeCard {...mock} />);

		const button = getByRole('button', { name: mock.buttonText });

		fireEvent.click(button);

		act(() => {
			const title = getAllByRole('heading', { name: mock.title });

			expect(title).toHaveLength(2);
		});
	});

	it('should render technologies icons with open modal', () => {
		render(<ChallengeCard {...mock} />);

		const button = getByRole('button', { name: mock.buttonText });

		fireEvent.click(button);

		act(() => {
			const icons = screen.getByTestId('technologies-icons');

			expect(icons).toBeInTheDocument();
		});
	});

	it('should render iframe', () => {
		render(<ChallengeCard {...mock} />);

		const button = getByRole('button', { name: mock.buttonText });

		fireEvent.click(button);

		act(() => {
			const iframe = screen.getByTestId('iframe-video');

			expect(iframe).toHaveAttribute(
				'src',
				`https://www.youtube.com/embed/${mock.videoID}`,
			);
		});
	});

	it('should render button checkout with open modal', () => {
		render(<ChallengeCard {...mock} />);

		const button = getByRole('button', { name: mock.buttonText });

		fireEvent.click(button);

		act(() => {
			const buttonCheckout = getByRole('link', { name: mock.buttonModal.text });

			expect(buttonCheckout).toHaveAttribute('href', mock.buttonModal.href);
		});
	});
});
