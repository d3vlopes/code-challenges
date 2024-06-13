import { MainTemplate } from '@/presentation/templates/MainTemplate';

import { mainTemplateMock } from '@/presentation/templates/MainTemplate/mock';

import { JSONLd } from './seo';

export default function Main() {
	const data = mainTemplateMock;

	return (
		<>
			<MainTemplate {...data} />
			<JSONLd data={data} />
		</>
	);
}
