import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
	args: {
		label: 'Email',
		placeholder: 'Insira seu melhor email',
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

const template: Story = {
	render: (args) => (
		<div style={{ maxWidth: '352px' }}>
			<Input {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};

export const WithError: Story = {
	...template,
	args: {
		error: 'Something went wrong',
	},
};
