import type { Meta, StoryObj } from '@storybook/react';

import { logoMock } from './mock';

import { Logo } from '.';

const meta: Meta<typeof Logo> = {
	title: 'Logo',
	component: Logo,
	args: logoMock,
};

export default meta;
type Story = StoryObj<typeof Logo>;

const template: Story = {
	render: (args) => (
		<>
			<Logo {...args} />
		</>
	),
};

export const Default: Story = {
	...template,
};
