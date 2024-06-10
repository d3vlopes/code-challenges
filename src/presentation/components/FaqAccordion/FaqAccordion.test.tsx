import { render, screen, userEvent, waitFor } from '@/__tests__/helpers';

import { generateID } from '@/utils/generate-id';

import { FaqAccordion, FaqAccordionProps } from '.';

const mock: FaqAccordionProps = {
	items: [
		{
			id: generateID(),
			title: 'Example title',
			content: 'Loren ipsum dolor sit',
		},
	],
};

describe('<FaqAccordion />', () => {
	it('should render heading', () => {
		render(<FaqAccordion {...mock} />);

		for (const item of mock.items) {
			const heading = screen.getByRole('heading', { name: item.title });

			expect(heading).toBeInTheDocument();
		}
	});

	it('should render content', () => {
		render(<FaqAccordion {...mock} />);

		for (const item of mock.items) {
			const content = screen.getByText(item.content);

			expect(content).toBeInTheDocument();
		}
	});

	it('should render open/close button', () => {
		render(<FaqAccordion {...mock} />);

		const buttons = screen.getAllByRole('button');

		expect(buttons).toHaveLength(mock.items.length);
	});

	it('should render icon', () => {
		render(<FaqAccordion {...mock} />);

		const icon = screen.getAllByLabelText('Mostrar conteúdo');

		expect(icon).toHaveLength(mock.items.length);
	});

	it('should render close by default', () => {
		render(<FaqAccordion {...mock} />);

		for (const item of mock.items) {
			const icon = screen.getByLabelText('Mostrar conteúdo');
			const content = screen.getByText(item.content);

			expect(icon).toBeInTheDocument();

			expect(content).toHaveStyle({
				display: 'none',
			});
		}
	});

	it('should change close/open state on click button', async () => {
		render(<FaqAccordion {...mock} />);

		for (const item of mock.items) {
			const button = screen.getByRole('button');

			userEvent.click(button);

			await waitFor(() => {
				const content = screen.getByText(item.content);

				const icon = screen.getByLabelText('Esconder conteúdo');

				expect(icon).toBeInTheDocument();

				expect(content).toHaveStyle({
					display: 'block',
				});
			});
		}
	});
});
