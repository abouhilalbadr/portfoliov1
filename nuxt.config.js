
export default {
	ssr: false,
	/*
	** Headers of the page
	*/
	head: {
		title: 'Abouhilal Badr',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'I am a Front End developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with Vue. I also have experience working with PHP, laravel and React.' },
			{ hid: 'robots', name: 'robots', content:'index,follow' },
			{ 'http-equiv': 'x-ua-compatiable', content: 'IE=edge' },
			{'http-equiv':'http-equiv', content:'text/html; charset=UTF-8'}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Slab:wght@700&display=swap' }
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		{ src: '~/plugins/vue-carousel.js', ssr: false },
		{ src: '~/plugins/lazy-sizes.js', ssr: false },
		],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
	],
	/*
	** Nuxt.js modules
	*/
	modules: [],
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend (config, { isDev, isClient, loaders: { vue } }) {
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src']
				vue.transformAssetUrls.source = ['data-srcset', 'srcset']
			}
		}
	}
}
