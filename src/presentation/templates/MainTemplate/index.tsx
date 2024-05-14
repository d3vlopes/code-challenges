import { MainModel } from '@/domain/models/Main';

import { Header } from '@/presentation/components/Header';
import { Hero } from '@/presentation/components/Hero';

export type MainTemplateProps = MainModel;

export const MainTemplate = (props: MainTemplateProps) => {
	return (
		<>
			<Header {...props.header} />
			<Hero {...props.hero} />
		</>
	);
};
