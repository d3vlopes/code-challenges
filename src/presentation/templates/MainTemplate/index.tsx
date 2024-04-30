import { MainModel } from '@/domain/models/Main';

import { Header } from '@/presentation/components/Header';

export type MainTemplateProps = MainModel;

export const MainTemplate = (props: MainTemplateProps) => {
	return (
		<>
			<Header {...props.header} />
		</>
	);
};
