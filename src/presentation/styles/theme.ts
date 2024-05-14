export const theme = {
	colors: {
		gradient: 'linear-gradient(230deg, #FE6B0C 2.16%, #FE012F 87.97%)',
		background: {
			100: '#252221',
			200: '#1B1919',
			300: '#181514',
			400: '#151211',
			500: '#120F0E',
		},
		support: {
			white: '#FFF6F3',
			red: '#D31A3B',
			green: '#148A4A',
		},
		grey: {
			100: '#D9D9D9',
			200: '#BFBFBF',
			300: '#AEAEAE',
			400: '#535353',
		},
		text: {
			white: '#F1F1F1',
			black: '#131211',
		},
	},
	fonts: {
		family: {
			highlight: 'var(--font-highlight)',
			heading: 'var(--font-heading)',
			body: 'var(--font-body)',
		},
		sizes: {
			xs: '1.2rem',
			sm: '1.4rem',
			base: '1.6rem',
			lg: '1.8rem',
			xl: '2rem',
			'2xl': '2.2rem',
			'3xl': '2.4rem',
			'4xl': '2.6rem',
			'5xl': '2.8rem',
			'6xl': '3.2rem',
			'7xl': '3.6rem',
			'8xl': '4rem',
			'9xl': '5.5rem',
		},
	},
	layers: {
		base: 10,
		menu: 20,
		overlay: 30,
		modal: 40,
		alwaysOnTop: 50,
	},
	transitions: {
		slow: '0.5s ease-in-out',
		default: '0.3s ease-in-out',
		fast: '0.1s ease-in-out',
		ease: {
			slow: '0.5s ease',
			default: '0.25s ease',
			fast: '0.1s ease',
		},
	},
} as const;
