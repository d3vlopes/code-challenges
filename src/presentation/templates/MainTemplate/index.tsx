import { MainModel } from '@/domain/models/Main';

import { Header } from '@/presentation/components/Header';
import { Hero } from '@/presentation/components/Hero';

import { BenefitsSection } from './sections/Benefits';
import { CheckoutSection } from './sections/Checkout';
import { HighlightsSection } from './sections/Highlights';
import { HowItWorksSection } from './sections/HowItWorks';
import { TracksSection } from './sections/Tracks';

import * as S from './styles';

export type MainTemplateProps = MainModel;

export const MainTemplate = (props: MainTemplateProps) => {
	return (
		<>
			<Header {...props.header} />
			<Hero {...props.hero} />

			<S.Container>
				<HighlightsSection {...props.highlights} />
			</S.Container>

			<TracksSection {...props.tracks} />

			<S.Container>
				<HowItWorksSection {...props.howItWorks} />
				<BenefitsSection {...props.benefits} />
			</S.Container>

			<CheckoutSection {...props.checkout} />
		</>
	);
};
