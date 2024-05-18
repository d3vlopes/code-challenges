import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Modal } from '.';

const meta: Meta<typeof Modal> = {
	title: 'Modal',
	component: Modal,
	args: {
		children: (
			<div
				style={{
					height: '500px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				Children
			</div>
		),
		isOpen: true,
		onRequestClose: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof Modal>;

const template: Story = {
	render: (args) => (
		<>
			<Modal {...args} />
		</>
	),
};

export const Default: Story = {
	...template,
};
