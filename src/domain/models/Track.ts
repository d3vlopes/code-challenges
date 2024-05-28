import { ChallengeCardModel } from './ChallengeCard';

interface ChallengeType extends ChallengeCardModel {
	id: string;
}

export interface TrackModel {
	id: string;
	name: string;
	isReleased: boolean;
	challenges?: ChallengeType[];
}
