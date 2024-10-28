'use client';

import { ChangeEvent, useState } from 'react';

import { TrackModel } from '@/domain/models/Track';

import { Button } from '@/presentation/components/Button';
import { Modal } from '@/presentation/components/Modal';
import { OptionsProps, Select } from '@/presentation/components/Select';

import { ModalProps } from '@/infra/libs/ui-library/Modal';

import { generateID } from '@/utils/generate-id';

import * as S from '../styles';

const options: OptionsProps[] = [
	{
		id: generateID(),
		text: 'Frontend Developer',
		value: 'frontend-developer',
	},
	{
		id: generateID(),
		text: 'Backend Developer',
		value: 'backend-developer',
	},
];

type Track = Pick<TrackModel, 'name' | 'href'>;

export interface ModalCheckoutProps {
	modal: Omit<ModalProps, 'children'>;
	buttonText: string;
	tracks: Track[];
}

export const ModalCheckout = ({
	modal,
	buttonText,
	tracks,
}: ModalCheckoutProps) => {
	const [selectTrack, setSelectedTrack] = useState<Track>(tracks[0]);

	function handleChangeSelect(event: ChangeEvent<HTMLSelectElement>) {
		const value = event.currentTarget.value.replace('-', ' ');

		const trackSelected = tracks.filter(
			(track) => track.name.toLowerCase() === value,
		);

		setSelectedTrack(trackSelected[0]);
	}

	return (
		<Modal {...modal}>
			<S.ModalContent>
				<h2>Selecione sua trilha</h2>

				<Select options={options} name="tracks" onChange={handleChangeSelect} />

				<Button asChild>
					<a href={selectTrack.href}>{buttonText}</a>
				</Button>
			</S.ModalContent>
		</Modal>
	);
};
