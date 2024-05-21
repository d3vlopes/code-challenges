import { ChallengeModel } from './Challenge';

export interface ChallengeCardModel extends ChallengeModel {
	buttonText: string;
	videoID: string;
	buttonModal: {
		text: string;
		href: string;
	};
}
