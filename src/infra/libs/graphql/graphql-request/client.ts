import { GraphQLClient } from 'graphql-request';

const apiURL = process.env.API_URL || '';

export const client = new GraphQLClient(apiURL, {
	headers: {
		authorization: `Bearer ${process.env.API_TOKEN}`,
	},
});
