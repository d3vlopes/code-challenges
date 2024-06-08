import { RequestDocument } from 'graphql-request';

import { client } from './client';

export class GraphqlClientFacade {
	static async request<T>(document: RequestDocument) {
		const data = await client.request<T>(document);

		return data;
	}
}
