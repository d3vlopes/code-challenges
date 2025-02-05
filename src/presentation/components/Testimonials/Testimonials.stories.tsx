import type { Meta, StoryObj } from '@storybook/react';

import { testimonialsMock } from './mock';

import { Testimonials } from '.';

const meta: Meta<typeof Testimonials> = {
	title: 'Testimonials',
	component: Testimonials,
	args: testimonialsMock,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof Testimonials>;

const template: Story = {
	render: (args) => (
		<div
			style={{
				margin: '3.2rem 0',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Testimonials {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};
