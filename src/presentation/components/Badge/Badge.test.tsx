import { render, screen } from '@/__tests__/helpers';

import { Badge } from '.';

describe('<Badge />', () => {
	it('should render text', () => {
		render(<Badge>Loren ipsum dolor</Badge>);

		const text = screen.getByText('Loren ipsum dolor');

		expect(text).toBeInTheDocument();
	});

	it('should render medium size by default', () => {
		const { container } = render(<Badge>Loren ipsum dolor</Badge>);

		const wrapper = container.firstChild as HTMLElement;

		expect(wrapper).toHaveStyle({
			width: '7.4rem',
			height: '2.5rem',
		});
	});

	it('should render small size', () => {
		const { container } = render(<Badge size="small">Loren ipsum dolor</Badge>);

		const wrapper = container.firstChild as HTMLElement;

		expect(wrapper).toHaveStyle({
			width: '6.2rem',
			height: '2rem',
		});
	});
});
