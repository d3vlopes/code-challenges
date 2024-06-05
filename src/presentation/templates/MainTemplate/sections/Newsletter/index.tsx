import { NewsletterSectionModel } from '@/domain/models/Sections';

import { Button } from '@/presentation/components/Button';
import { Input } from '@/presentation/components/Input';
import { Select } from '@/presentation/components/Select';

import { sanitizeHTMLFacade } from '@/infra/libs/sanitizers/sanitize-html';

import { options } from './options';

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

			<S.FormWrapper>
				<Input label="Nome" placeholder="Nome completo" />

				<Input label="Email" placeholder="Seu melhor email" type="email" />

				<Select name="track" label="Trilha" options={options} />

				<Button type="button">{buttonText}</Button>
			</S.FormWrapper>
		</S.Wrapper>
	);
};
