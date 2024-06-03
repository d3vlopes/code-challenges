import { StepModel } from '@/domain/models/Step';

import * as S from './styles';

export interface StepsProps {
	items: StepModel[];
}

export const Steps = ({ items }: StepsProps) => {
	return (
		<S.Wrapper>
			{items.map((item) => {
				return (
					<S.ItemWrapper key={item.id}>
						<S.StepNumber>
							<span>{item.number}</span>
						</S.StepNumber>

						<p>{item.text}</p>
					</S.ItemWrapper>
				);
			})}
		</S.Wrapper>
	);
};
