'use client';

import { AboutSectionModel } from '@/domain/models/Sections';

import { Logo } from '@/presentation/components/Logo';

import { useAnimation } from '@/presentation/hooks/useAnimation';

import { sanitizeHTMLFacade } from '@/infra/libs/sanitizers/sanitize-html';

import * as S from './styles';

export const AboutSection = ({ logo, text }: AboutSectionModel) => {
	const clearTextHTML = sanitizeHTMLFacade(text);

	const { inView, ref } = useAnimation();

	const animationVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<S.Wrapper
			ref={ref}
			initial="hidden"
			whileInView="visible"
			animate={inView ? 'visible' : 'hidden'}
			variants={animationVariants}
			viewport={{ once: true, amount: 'all' }}
			transition={{ duration: 0.5, type: 'tween' }}
		>
			<S.LogoWrapper>
				<Logo src={logo.src} alt={logo.alt} />
			</S.LogoWrapper>

			<S.TextContent dangerouslySetInnerHTML={{ __html: clearTextHTML }} />
		</S.Wrapper>
	);
};
