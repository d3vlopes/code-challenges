import { render, screen } from '@/__tests__/helpers';

import { benefitsCardMock } from './mock';

import { BenefitsCard } from '.';

const { getByRole, getByText, getAllByRole } = screen;

const mock = benefitsCardMock.items[0];

describe('<BenefitsCard />', () => {
	beforeEach(() => {
		render(<BenefitsCard items={[mock]} />);
	});

	it('should render benefits icons', () => {
		const image = getByRole('img', { name: mock.icon.alt });

		expect(image).toBeInTheDocument();
	});

	it('should render benefits name', () => {
		const name = getByRole('heading', { name: mock.name });

		expect(name).toBeInTheDocument();
	});

	it('should render benefits description', () => {
		const description = getByText(mock.description);

		expect(description).toBeInTheDocument();
	});

	it('should render features heading', () => {
		const featureHeading = getByRole('heading', {
			name: mock.featureHeading,
		});

		expect(featureHeading).toBeInTheDocument();
	});

	it('should render correct features icon length', () => {
		const iconsChecked = getAllByRole('img', { name: 'Ícone de positivo' });

		expect(iconsChecked).toHaveLength(mock.features.length);
	});

	it('should render features text', () => {
		for (const feature of mock.features) {
			const featureText = getByText(feature.text);

			expect(featureText).toBeInTheDocument();
		}
	});
});
