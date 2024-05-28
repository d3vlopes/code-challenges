import type { Meta, StoryObj } from '@storybook/react';

import { tracksMock } from './mock';

import { TracksTab } from '.';

const meta: Meta<typeof TracksTab> = {
	title: 'TracksTab',
	component: TracksTab,
	args: tracksMock,
};

export default meta;
type Story = StoryObj<typeof TracksTab>;

const template: Story = {
	render: (args) => (
		<div style={{ maxWidth: '1280px', margin: '0 auto' }}>
			<TracksTab {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};
