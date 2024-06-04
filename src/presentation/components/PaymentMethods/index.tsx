import Image from 'next/image';

import { PaymentMethodModel } from '@/domain/models/Payment';

import * as S from './styles';

export interface PaymentMethodsProps {
	items: PaymentMethodModel[];
}

export const PaymentMethods = ({ items }: PaymentMethodsProps) => {
	return (
		<S.Wrapper>
			{items.map((item) => {
				return (
					<S.ItemWrapper key={item.id}>
						<Image
							src={item.icon.src}
							alt={item.icon.alt}
							title={item.icon.title}
							width={35}
							height={35}
						/>

						<span>{item.name}</span>
					</S.ItemWrapper>
				);
			})}
		</S.Wrapper>
	);
};
