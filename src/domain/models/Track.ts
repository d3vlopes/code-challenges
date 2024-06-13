import { ChallengeModel } from './Challenge';

interface ChallengeType extends ChallengeModel {
	id: string;
}

export interface TrackModel {
	id: string;
	name: string;
	isReleased: boolean;
	challenges?: ChallengeType[];
	href?: string;
}
