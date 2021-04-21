module.exports = {
	purge: [
		'./src/components/**/*.js',
		'./pages/**/*.js'],
	theme: {
		extend: {},
		backgroundColor: theme => ({
			...theme('colors'),
			'primary': '#3490dc',
			'secondary': '#ffed4a',
			'danger': '#e3342f',
			'irishGreen': '#00843D',
			'notreDameBlue': '#0C2340',
			'domeGold': '#C99700',
		})
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}
