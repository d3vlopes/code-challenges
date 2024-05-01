import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	args: {
		children: 'Explorar trilhas',
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

const template: Story = {
	render: (args) => (
		<>
			<Button {...args} />
		</>
	),
};

export const Default: Story = {
	...template,
};

export const Disabled: Story = {
	...template,
	args: {
		disabled: true,
	},
};

export const AsAnchor: Story = {
	render: (args) => (
		<div style={{ maxWidth: 'max-content' }}>
			<Button {...args}>
				<a href="https://www.google.com.br" target="_blank">
					Anchor
				</a>
			</Button>
		</div>
	),
	args: {
		asChild: true,
	},
};
