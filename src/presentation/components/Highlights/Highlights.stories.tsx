import type { Meta, StoryObj } from '@storybook/react';

import { highlightsMock } from './mock';

import { Highlights } from '.';

const meta: Meta<typeof Highlights> = {
	title: 'Highlights',
	component: Highlights,
	args: {
		items: highlightsMock.items,
	},
};

export default meta;
type Story = StoryObj<typeof Highlights>;

const template: Story = {
	render: (args) => (
		<div style={{ maxWidth: '840px', margin: '0 auto' }}>
			<Highlights {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};
