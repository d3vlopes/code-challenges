import type { Meta, StoryObj } from '@storybook/react';

import { paymentMethodsMock } from './mock';

import { PaymentMethods } from '.';

const meta: Meta<typeof PaymentMethods> = {
	title: 'PaymentMethods',
	component: PaymentMethods,
	args: paymentMethodsMock,
};

export default meta;
type Story = StoryObj<typeof PaymentMethods>;

const template: Story = {
	render: (args) => (
		<>
			<PaymentMethods {...args} />
		</>
	),
};

export const Default: Story = {
	...template,
};
