import { MainTemplate } from '@/presentation/templates/MainTemplate';

import { mainTemplateMock } from '@/presentation/templates/MainTemplate/mock';

export default function Main() {
	return <MainTemplate {...mainTemplateMock} />;
}
