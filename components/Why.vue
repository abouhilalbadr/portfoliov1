<template>
	<section class="container mx-auto py-6 lg:py-12">
		<div class="flex flex-col lg:flex-row flex-wrap mx-0 lg:mx-4">
			<div class="w-full lg:w-1/2 order-last lg:order-first">
				<div class="p-0 lg:pr-16 flex flex-col justify-center h-full relative">
					<h2 class="text-4xl lg:text-5xl font-bold text-title font-title mt-8 lg:mt-0 mb-8">{{title}}</h2>
					<div class="text-desc leading-normal mb-8 text-normal lg:text-xl" v-html="desc"></div>
					<nuxt-link target="_blank" class="uppercase tracking-widest border border-mainColor bg-mainColor text-white border-mainColor hover:bg-transparent hover:text-mainColor transition ease-in-out duration-700 px-12 py-4 rounded self-start" to="/cv">My CV</nuxt-link>
				</div>
			</div>
			<div class="w-full lg:w-1/2">
				<img class="meimg w-full object-cover rounded-lg lazyload" :data-src="require(`~/assets/img/${image}`)" alt="Abouhilal Badr">
			</div>
		</div>
	</section>
</template>

<script>
    export default {
        name: "Why",
		data() {
        	return {
        		title: 'Why Me?',
				image: 'me.jpg',
				desc: '<p class="mb-6">I\'m a web designer &amp; developer with a vision to help companies with design solutions to their problems by integrating the values into visuals and creating products with a human-centered design approach.</p><p>I\'m working on making the future of web design &amp; development in my country creative and up to date. I\'ve been a creative professional for over 7 years, designing, and developing for some awesome clients.</p>'
			}
		}
    }
</script>

<style scoped>
	.meimg {
		height: 500px;
	}
	@media (max-width: 768px) {
		.meimg {
			height: 300px;
		}
	}
</style>
