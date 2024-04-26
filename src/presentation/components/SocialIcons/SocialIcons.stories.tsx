import type { Meta, StoryObj } from '@storybook/react';

import { socialIconsMock } from './mock';

import { SocialIcons } from '.';

const meta: Meta<typeof SocialIcons> = {
	title: 'SocialIcons',
	component: SocialIcons,
	args: socialIconsMock,
	parameters: {
		backgrounds: {
			default: 'background-500',
		},
	},
};

export default meta;
type Story = StoryObj<typeof SocialIcons>;

const template: Story = {
	render: (args) => (
		<>
			<SocialIcons {...args} />
		</>
	),
};

export const Default: Story = {
	...template,
};
