import { Slot } from '@radix-ui/react-slot';
import { ComponentProps, ReactNode, forwardRef } from 'react';

type ButtonBaseProps = ComponentProps<'button'>;

export interface ButtonProps extends ButtonBaseProps {
	children: ReactNode;
	asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, asChild = false, ...props }, ref) => {
		const Element = asChild ? Slot : 'button';

		return (
			<Element ref={ref} {...props}>
				{children}
			</Element>
		);
	},
);
