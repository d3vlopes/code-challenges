import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '@/presentation/styles/container';

import { faqAccordionMock } from './mock';

import { FaqAccordion } from '.';

const meta: Meta<typeof FaqAccordion> = {
	title: 'FaqAccordion',
	component: FaqAccordion,
	args: faqAccordionMock,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof FaqAccordion>;

const template: Story = {
	render: (args) => (
		<Container>
			<FaqAccordion {...args} />
		</Container>
	),
};

export const Default: Story = {
	...template,
};
