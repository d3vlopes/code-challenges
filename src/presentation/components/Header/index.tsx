'use client';

import { useState } from 'react';

import { HeaderModel } from '@/domain/models/Header';

import { Logo } from '../Logo';
import { SocialIcons } from '../SocialIcons';

import * as S from './styles';

export type HeaderProps = HeaderModel;

export const Header = ({ logo, navigationLinks, socials }: HeaderProps) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	function toggleMenu() {
		setIsMobileMenuOpen((isPrev) => !isPrev);
	}

	return (
		<S.Header>
			<S.Wrapper>
				<S.Container>
					<Logo {...logo} />

					<S.HamburgerButton
						type="button"
						aria-label={`${isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}`}
						isOpen={isMobileMenuOpen}
						onClick={toggleMenu}
						aria-expanded={isMobileMenuOpen}
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</S.HamburgerButton>

					<S.Nav
						isOpen={isMobileMenuOpen}
						aria-hidden={!isMobileMenuOpen}
						aria-label="Navegação principal"
					>
						<ul>
							{navigationLinks.map((link) => {
								return (
									<li key={link.id}>
										<a aria-label={link.text} href={link.href}>
											{link.text}
										</a>
									</li>
								);
							})}
						</ul>
					</S.Nav>

					<S.SocialWrapper isOpen={isMobileMenuOpen}>
						<SocialIcons items={socials} />
					</S.SocialWrapper>
				</S.Container>
			</S.Wrapper>
		</S.Header>
	);
};
