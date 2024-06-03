import { render, screen } from '@/__tests__/helpers';

import { generateID } from '@/utils/generate-id';

import { Steps, StepsProps } from '.';

const mock: StepsProps = {
	items: [
		{
			id: generateID(),
			number: 1,
			text: 'Loren ipsum dolor',
		},
	],
};

describe('<Steps />', () => {
	it('should render step number', () => {
		render(<Steps items={mock.items} />);

		for (const step of mock.items) {
			const stepNumber = screen.getByText(step.number);

			expect(stepNumber).toBeInTheDocument();
		}
	});

	it('should render step text', () => {
		render(<Steps items={mock.items} />);

		for (const step of mock.items) {
			const stepText = screen.getByText(step.text);

			expect(stepText).toBeInTheDocument();
		}
	});
});
