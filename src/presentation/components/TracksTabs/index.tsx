'use client';

import { useState } from 'react';

import { TrackModel } from '@/domain/models/Track';

import { Badge } from '@/presentation/components/Badge';
import { ChallengeCard } from '@/presentation/components/ChallengeCard';

import { Container } from '@/presentation/styles/container';

import { generateTabID } from './helpers/generateAccordionID';

import * as S from './styles';

export interface TracksTabProps {
	tracks: TrackModel[];
}

export const TracksTab = ({ tracks }: TracksTabProps) => {
	const [tabActive, setTabActive] = useState(tracks[0].name);

	function handleTabActive(tab: string) {
		setTabActive(tab);
	}

	return (
		<>
			<S.TabButtonsWrapper role="tablist" aria-label="Trilhas">
				{tracks.map((track) => {
					const id = generateTabID(track.name);

					return (
						<S.TabButtonWrapper key={track.id}>
							{!track.isReleased ? <Badge>Em breve</Badge> : null}

							<S.TabButton
								type="button"
								role="tab"
								id={`tab-${id}`}
								aria-controls={`panel-${id}`}
								aria-selected={tabActive === track.name}
								onClick={() => handleTabActive(track.name)}
								disabled={!track.isReleased}
								isActive={tabActive === track.name}
							>
								<span>{track.name}</span>
							</S.TabButton>
						</S.TabButtonWrapper>
					);
				})}
			</S.TabButtonsWrapper>

			{tracks.map((track) => {
				const id = generateTabID(track.name);

				return (
					<S.TabContent
						key={track.id}
						role="tabpanel"
						id={`panel-${id}`}
						aria-labelledby={`tab-${id}`}
						aria-hidden={tabActive !== track.name}
						isActive={tabActive === track.name}
					>
						<Container>
							<S.ChallengesWrapper>
								{track.challenges?.map((challenge) => {
									return <ChallengeCard key={challenge.id} {...challenge} />;
								})}
							</S.ChallengesWrapper>
						</Container>
					</S.TabContent>
				);
			})}
		</>
	);
};
