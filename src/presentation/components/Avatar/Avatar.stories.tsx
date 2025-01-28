import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
	title: 'Avatar',
	component: Avatar,
	args: {
		image: {
			src: 'https://github.com/Viniciusgalmeida.png',
			alt: 'Foto do aluno Vinícius Almeida',
		},
		size: 'medium',
	},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const template: Story = {
	render: (args) => (
		<>
			<Avatar {...args} />
		</>
	),
};

export const Default: Story = {
	...template,
};

export const Large: Story = {
	...template,
	args: {
		size: 'large',
	},
};
