import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '.';

const meta: Meta<typeof Badge> = {
	title: 'Badge',
	component: Badge,
	args: {
		children: 'Em breve',
		size: 'medium',
		color: 'red',
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

export const Medium: Story = {
	...template,
	args: {
		size: 'medium',
	},
};

export const Red: Story = {
	...template,
	args: {
		size: 'small',
		color: 'red',
	},
};

export const Green: Story = {
	...template,
	args: {
		size: 'small',
		color: 'green',
	},
};
