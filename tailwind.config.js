/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				white: '#fdf5ef',
				text: '#8c6727',
				buttonHover:"#6b542c",
				editButton: '#944d0a',
				jazzberryJam: '#bf005d',
				springGreen: '#dceccc',
				BananaMania: '#f8e2ac',
				plum: '#9a4f8f',
			},
			margin: {
				13: '3.5rem',
				16: '4rem',
				17: '6.39rem',
			},
		},
		width: {
			headerWCustom: 'rem',
		},
	},
	plugins: [],
};
