'use client';

import Image from 'next/image';

import { CheckoutSectionModel } from '@/domain/models/Sections';

import { useAnimation } from '@/presentation/hooks/useAnimation';

import { motion } from '@/infra/libs/animations/framer-motion';

import { Button } from '@/presentation/components/Button';
import { PaymentMethods } from '@/presentation/components/PaymentMethods';

import { makeAnimation } from './animations';

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
	const { ref, inView } = useAnimation();

	const animationVariants = {
		hidden: { opacity: 0, x: 10 },
		visible: { opacity: 1, x: 0 },
	};

	const warningAnimation = makeAnimation.flashAnimation();
	const badgeAnimation = makeAnimation.moveAnimation(20);
	const headingAnimation = makeAnimation.moveAnimation(40);

	return (
		<S.Wrapper id={id}>
			<motion.div {...badgeAnimation}>
				<S.Badge>
					<span>{badgeText}</span>
				</S.Badge>
			</motion.div>

			<S.Heading {...headingAnimation}>{heading}</S.Heading>

			<S.FeaturesItemWrapper>
				{features.map((feature, index) => {
					const animationDelay = (index + 1) * 0.8;

					return (
						<S.FeatureItem
							key={feature.id}
							ref={ref}
							initial="hidden"
							whileInView="visible"
							animate={inView ? 'visible' : 'hidden'}
							variants={animationVariants}
							viewport={{ once: true, amount: 'all' }}
							transition={{
								duration: 0.5,
								delay: animationDelay,
								type: 'tween',
							}}
						>
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

				{!!warningText && (
					<motion.span {...warningAnimation}>{warningText}</motion.span>
				)}
			</S.ButtonWrapper>

			<S.PaymentMethodsWrapper>
				<span>Formas de pagamento</span>

				<PaymentMethods items={paymentMethods} />
			</S.PaymentMethodsWrapper>
		</S.Wrapper>
	);
};
