import type { Meta, StoryObj } from '@storybook/react';

import { stepsMock } from './mock';

import { Steps } from '.';

const meta: Meta<typeof Steps> = {
	title: 'Steps',
	component: Steps,
	args: stepsMock,
};

export default meta;
type Story = StoryObj<typeof Steps>;

const template: Story = {
	render: (args) => (
		<div style={{ maxWidth: '510px', margin: '0 auto' }}>
			<Steps {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};
