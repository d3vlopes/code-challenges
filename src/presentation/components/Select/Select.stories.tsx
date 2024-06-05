import type { Meta, StoryObj } from '@storybook/react';

import { selectMock } from './mock';

import { Select } from '.';

const meta: Meta<typeof Select> = {
	title: 'Select',
	component: Select,
	args: selectMock,
};

export default meta;
type Story = StoryObj<typeof Select>;

const template: Story = {
	render: (args) => (
		<div style={{ maxWidth: '352px' }}>
			<Select {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};
