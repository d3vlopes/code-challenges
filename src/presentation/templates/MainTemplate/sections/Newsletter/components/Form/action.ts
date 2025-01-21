'use server';

import { AddNewsletterMutationVariables } from '@/infra/api/generated/graphql';

import { ADD_NEWSLETTER } from '@/infra/api/mutation';

import { NewsletterFormModel } from './schema';

export interface AddOnNewsletterResponse {
	message: string;
	payload: {
		id?: string;
		error?: {
			message: string;
		}[];
	};
}

export async function addOnNewsletter(
	formData: NewsletterFormModel,
): Promise<AddOnNewsletterResponse> {
	const trackMap = {
		'frontend-developer': 'Frontend Developer',
		'backend-developer': 'Backend Developer',
		'mobile-developer': 'Mobile Developer',
		'web-designer': 'Web Designer',
	};

	const variables: AddNewsletterMutationVariables = {
		...formData,
		track: trackMap[formData.track],
	};

	try {
		const response = await fetch(process.env.API_URL!, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.API_TOKEN!}`,
			},
			body: JSON.stringify({
				query: ADD_NEWSLETTER,
				variables: variables,
			}),
		});

		const data = await response.json();

		const isError = data.errors?.length > 0;

		if (!data || isError) {
			return {
				message: 'Bad request',
				payload: { error: data?.errors },
			};
		}

		return {
			message: 'Subscription created successfully',
			payload: { ...data },
		};

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		throw new Error(error?.message);
	}
}
