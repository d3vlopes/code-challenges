import type { Meta, StoryObj } from '@storybook/react';

import { challengeMock } from './mock';

import { ChallengeCard } from '.';

const meta: Meta<typeof ChallengeCard> = {
	title: 'ChallengeCard',
	component: ChallengeCard,
	args: challengeMock,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof ChallengeCard>;

const template: Story = {
	render: (args) => (
		<div style={{ maxWidth: '400px' }}>
			<ChallengeCard {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};
