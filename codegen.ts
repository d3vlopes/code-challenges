import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema:
		'https://api-sa-east-1.hygraph.com/v2/clvfs1jse0jkz07uscgw1pp9a/master',
	documents: 'src/infra/api/**/*.ts',
	generates: {
		'src/infra/api/generated/': {
			preset: 'client',
			plugins: [],
		},
	},
};

export default config;
