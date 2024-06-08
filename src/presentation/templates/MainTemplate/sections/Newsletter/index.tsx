import { NewsletterSectionModel } from '@/domain/models/Sections';

import { sanitizeHTMLFacade } from '@/infra/libs/sanitizers/sanitize-html';

import { Form } from './components/Form';

import * as S from './styles';

export const NewsletterSection = ({
	titleHTML,
	description,
	buttonText,
}: NewsletterSectionModel) => {
	const clearTitle = sanitizeHTMLFacade(titleHTML);

	return (
		<S.Wrapper>
			<S.Title dangerouslySetInnerHTML={{ __html: clearTitle }} />

			<S.Description>{description}</S.Description>

			<Form buttonText={buttonText} />
		</S.Wrapper>
	);
};
