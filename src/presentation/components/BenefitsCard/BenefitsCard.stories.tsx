import type { Meta, StoryObj } from '@storybook/react';

import { benefitsCardMock } from './mock';

import { BenefitsCard } from '.';

const meta: Meta<typeof BenefitsCard> = {
	title: 'BenefitsCard',
	component: BenefitsCard,
	args: benefitsCardMock,
};

export default meta;
type Story = StoryObj<typeof BenefitsCard>;

const template: Story = {
	render: (args) => (
		<div
			style={{
				maxWidth: '1280px',
				margin: '0 auto',
			}}
		>
			<BenefitsCard {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};
