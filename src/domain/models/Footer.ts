import { SocialIconModel, TrackModel } from './_barrel';

interface NavigationLinkModel {
	heading: string;
}

interface HelpLinkModel {
	id: string;
	text: string;
	href: string;
}

interface TrackNavigationLinkModel extends NavigationLinkModel {
	tracks: TrackModel[];
}

interface HelpNavigationLinkModel extends NavigationLinkModel {
	links: HelpLinkModel[];
}

interface SocialNavigationLinkModel extends NavigationLinkModel {
	socials: SocialIconModel[];
}

export interface FooterModel {
	navigationLinks: {
		tracksNavigation: TrackNavigationLinkModel;
		helpNavigation: HelpNavigationLinkModel;
		socialNavigation: SocialNavigationLinkModel;
	};
	companyName: string;
}
