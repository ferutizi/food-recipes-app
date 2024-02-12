import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				'sm': '0 2px 4px 0 rgb(0 0 0 / 0.25)',
				'inset': '-4px -4px 4px rgba(0, 0, 0, 0.25)'
			},
			width: {
				'99': '30rem'
			},
			height: {
				'99': '30rem'
			}
		},
	},
	plugins: [],
}
export default config
