import { render, screen } from '@/__tests__/helpers';

import { generateID } from '@/utils/generate-id';

import { PaymentMethods, PaymentMethodsProps } from '.';

const mock: PaymentMethodsProps = {
	items: [
		{
			id: generateID(),
			icon: {
				src: 'https://www.cdn.com/payment-icon.svg',
				alt: 'Loren ipsum dolor',
				title: 'Cartão',
			},
			name: 'Cartão',
		},
	],
};

describe('<PaymentMethods>', () => {
	it('should render correct Image length', () => {
		render(<PaymentMethods items={mock.items} />);

		const imagens = screen.getAllByRole('img');

		expect(imagens).toHaveLength(mock.items.length);
	});

	it('should render payment method name', () => {
		render(<PaymentMethods items={mock.items} />);

		for (const item of mock.items) {
			const paymentMethodName = screen.getByText(item.name);

			expect(paymentMethodName).toBeInTheDocument();
		}
	});

	it('should render title icons', () => {
		render(<PaymentMethods items={mock.items} />);

		for (const item of mock.items) {
			const iconTitle = screen.getByTitle(item.icon.title);

			expect(iconTitle).toBeInTheDocument();
		}
	});
});
