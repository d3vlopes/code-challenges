export function generateTabID(value: string) {
	return (
		value
			.trim()
			.toLowerCase()
			.replaceAll(' ', '-')
			.replace('?', '')
			.normalize('NFD')
			// biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
			.replace(/[\u0300-\u036f]/g, '')
	);
}
