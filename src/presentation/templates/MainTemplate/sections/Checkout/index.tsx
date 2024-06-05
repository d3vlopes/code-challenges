import Image from 'next/image';

import { CheckoutSectionModel } from '@/domain/models/Sections';

import { Button } from '@/presentation/components/Button';
import { PaymentMethods } from '@/presentation/components/PaymentMethods';

import * as S from './styles';

export const CheckoutSection = ({
	id,
	badgeText,
	heading,
	features,
	originalPrice,
	salePrice,
	button,
	warningText,
	paymentMethods,
}: CheckoutSectionModel) => {
	return (
		<S.Wrapper id={id}>
			<S.Badge>
				<span>{badgeText}</span>
			</S.Badge>

			<S.Heading>{heading}</S.Heading>

			<S.FeaturesItemWrapper>
				{features.map((feature) => {
					return (
						<S.FeatureItem key={feature.id}>
							<Image
								src="https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwwwkw8w1f0u07lyxpwu9jpi"
								alt="Ícone de positivo"
								width={40}
								height={40}
							/>

							<span>{feature.text}</span>
						</S.FeatureItem>
					);
				})}
			</S.FeaturesItemWrapper>

			<S.PriceWrapper>
				<S.OriginalPrice>De {originalPrice}</S.OriginalPrice>

				<S.SalePrice>
					Por <strong>{salePrice}</strong>/mês
				</S.SalePrice>
			</S.PriceWrapper>

			<S.ButtonWrapper>
				<Button asChild>
					<a href={button.href}>{button.text}</a>
				</Button>

				{!!warningText && <span>{warningText}</span>}
			</S.ButtonWrapper>

			<S.PaymentMethodsWrapper>
				<span>Formas de pagamento</span>

				<PaymentMethods items={paymentMethods} />
			</S.PaymentMethodsWrapper>
		</S.Wrapper>
	);
};
