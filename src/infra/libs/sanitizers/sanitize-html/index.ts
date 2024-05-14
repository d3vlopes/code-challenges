import sanitizeHtml from 'sanitize-html';

export function sanitizeHTMLFacade(html: string) {
	const clearHTML = sanitizeHtml(html);

	return clearHTML;
}
