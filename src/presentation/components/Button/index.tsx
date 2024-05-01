import { Button as ButtonBase } from '@/infra/libs/ui-library/Button';
import type { ButtonProps } from '@/infra/libs/ui-library/Button';

import * as S from './styles';

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<S.Wrapper>
			<ButtonBase {...props}>{children}</ButtonBase>
		</S.Wrapper>
	);
};
