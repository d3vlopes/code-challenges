import { Button as ButtonBase } from '@/infra/libs/ui-library/Button';
import type { ButtonProps as RadixButtonProps } from '@/infra/libs/ui-library/Button';

import * as S from './styles';

export interface ButtonProps extends RadixButtonProps {
	variant?: 'fill' | 'outline';
}

export const Button = ({
	children,
	variant = 'fill',
	...props
}: ButtonProps) => {
	return (
		<S.Wrapper variant={variant}>
			<ButtonBase {...props}>{children}</ButtonBase>
		</S.Wrapper>
	);
};
