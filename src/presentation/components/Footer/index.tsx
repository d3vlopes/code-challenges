'use client';

import { FooterModel } from '@/domain/models/Footer';

import { Badge } from '@/presentation/components/Badge';
import { SocialIcons } from '@/presentation/components/SocialIcons';

import * as S from './styles';

export type FooterProps = FooterModel;

export const Footer = ({
	navigationLinks: { tracksNavigation, helpNavigation, socialNavigation },
	companyName,
}: FooterModel) => {
	const currentYear = new Date().getFullYear();

	function handleTrack() {
		// setar trilha
	}

	return (
		<S.Footer>
			<S.Wrapper>
				<nav aria-label={`Navegação ${tracksNavigation.heading}`}>
					<S.Heading>{tracksNavigation.heading}</S.Heading>

					<S.TrackWrapper>
						{tracksNavigation.tracks.map((track) => {
							return (
								<S.Track key={track.id} isReleased={track.isReleased}>
									<a href={track.href ?? '#'} onClick={handleTrack}>
										<h3>{track.name}</h3>
									</a>

									{!track.isReleased ? (
										<Badge size="small">Em breve</Badge>
									) : null}

									{track.isNews ? (
										<Badge size="small" color="green">
											Novo
										</Badge>
									) : null}
								</S.Track>
							);
						})}
					</S.TrackWrapper>
				</nav>

				<nav aria-label={`Navegação ${helpNavigation.heading}`}>
					<S.Heading>{helpNavigation.heading}</S.Heading>

					<S.HelpNavigationWrapper>
						{helpNavigation.links.map((link) => {
							return (
								<li key={link.id}>
									<a href={link.href}>{link.text}</a>
								</li>
							);
						})}
					</S.HelpNavigationWrapper>
				</nav>

				<nav aria-label={`Navegação ${socialNavigation.heading}`}>
					<S.Heading>{socialNavigation.heading}</S.Heading>

					<SocialIcons items={socialNavigation.socials} />
				</nav>
			</S.Wrapper>

			<S.CopyrightWrapper>
				<span>
					© {companyName} - {currentYear}
				</span>
			</S.CopyrightWrapper>
		</S.Footer>
	);
};
