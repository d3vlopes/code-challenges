import { MainModel } from '@/domain/models/Main';

import { Footer } from '@/presentation/components/Footer';
import { Header } from '@/presentation/components/Header';
import { Hero } from '@/presentation/components/Hero';

import { AboutSection } from './sections/About';
import { BenefitsSection } from './sections/Benefits';
import { CheckoutSection } from './sections/Checkout';
import { FaqSection } from './sections/Faq';
import { HighlightsSection } from './sections/Highlights';
import { HowItWorksSection } from './sections/HowItWorks';
import { MentorSection } from './sections/Mentor';
import { NewsletterSection } from './sections/Newsletter';
import { TestimonialsSection } from './sections/Testimonials';
import { TracksSection } from './sections/Tracks';

import * as S from './styles';

export type MainTemplateProps = MainModel;

export const MainTemplate = (props: MainTemplateProps) => {
	return (
		<>
			<Header {...props.header} />
			<Hero {...props.hero} />

			<AboutSection {...props.about} />

			<S.Container>
				<HighlightsSection {...props.highlights} />
			</S.Container>

			<TracksSection {...props.tracks} />

			<S.Container>
				<HowItWorksSection {...props.howItWorks} />
				<BenefitsSection {...props.benefits} />
				<TestimonialsSection {...props.testimonials} />
				<MentorSection heading="Conheça quem vai te acompanhar nessa jornada" />
			</S.Container>

			<CheckoutSection {...props.checkout} />

			<S.Container>
				<NewsletterSection {...props.newsletter} />
			</S.Container>

			<FaqSection {...props.faq} />

			<Footer {...props.footer} />
		</>
	);
};
