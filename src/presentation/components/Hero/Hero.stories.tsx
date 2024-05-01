import type { Meta, StoryObj } from '@storybook/react';

import { heroMock } from './mock';

import { Hero } from '.';

const meta: Meta<typeof Hero> = {
	title: 'Hero',
	component: Hero,
	args: heroMock,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof Hero>;

const template: Story = {
	render: (args) => (
		<>
			<Hero {...args} />
		</>
	),
};

export const Default: Story = {
	...template,
};
