'use client';

import { TracksSectionModel } from '@/domain/models/Sections';

import { sanitizeHTMLFacade } from '@/infra/libs/sanitizers/sanitize-html';

import { Button } from '@/presentation/components/Button';
import { TracksTab } from '@/presentation/components/TracksTabs';

import * as S from './styles';

export const TracksSection = ({
	id,
	heading,
	content,
	cta,
}: TracksSectionModel) => {
	const clearTextHTML = sanitizeHTMLFacade(cta.textHTML);

	return (
		<S.Wrapper id={id}>
			<S.Title>{heading}</S.Title>

			<TracksTab tracks={content} />

			<S.CTAWrapper>
				<S.CTAText dangerouslySetInnerHTML={{ __html: clearTextHTML }} />

				<Button asChild>
					<a href={cta.button.href}>{cta.button.text}</a>
				</Button>
			</S.CTAWrapper>
		</S.Wrapper>
	);
};
