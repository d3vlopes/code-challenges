import { ReactNode } from 'react';

import * as S from './styles';

export interface BadgeProps {
	children: ReactNode;
	size?: 'medium' | 'small';
}

export const Badge = ({ children, size = 'medium' }: BadgeProps) => {
	return (
		<S.Wrapper size={size}>
			<span>{children}</span>
		</S.Wrapper>
	);
};
