import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '.';

const meta: Meta<typeof Badge> = {
	title: 'Badge',
	component: Badge,
	args: {
		children: 'Em breve',
		size: 'medium',
	},
};

export default meta;
type Story = StoryObj<typeof Badge>;

const template: Story = {
	render: (args) => (
		<>
			<Badge {...args} />
		</>
	),
};

export const Default: Story = {
	...template,
};

export const Small: Story = {
	...template,
	args: {
		size: 'small',
	},
};
