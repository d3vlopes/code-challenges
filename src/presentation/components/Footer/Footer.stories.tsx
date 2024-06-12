import type { Meta, StoryObj } from '@storybook/react';

import { footerMock } from './mock';

import { Footer } from '.';

const meta: Meta<typeof Footer> = {
	title: 'Footer',
	component: Footer,
	args: footerMock,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof Footer>;

const template: Story = {
	render: (args) => (
		<>
			<Footer {...args} />
		</>
	),
};

export const Default: Story = {
	...template,
};
