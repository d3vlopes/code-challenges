import { ReactNode } from 'react';

import * as S from './styles';

export interface BadgeProps {
	children: ReactNode;
	size?: 'medium' | 'small';
	color?: 'red' | 'green';
}

export const Badge = ({
	children,
	size = 'medium',
	color = 'red',
}: BadgeProps) => {
	return (
		<S.Wrapper size={size} color={color}>
			<span>{children}</span>
		</S.Wrapper>
	);
};
