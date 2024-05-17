import { MainModel } from '@/domain/models/Main';

import { Header } from '@/presentation/components/Header';
import { Hero } from '@/presentation/components/Hero';

import { HighlightsSection } from './sections/Highlights';

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
		</>
	);
};
