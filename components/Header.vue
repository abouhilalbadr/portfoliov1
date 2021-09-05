<template>
	<header class="py-12">
		<div class="container mx-auto flex flex-col lg:flex-row flex-wrap">
			<div class="w-full lg:w-1/2">
				<div class="h-full w-full lg:w-2/3">
					<div class="p-4 h-full flex flex-col justify-center">
						<span class="capitalize text-mainColor mb-4">{{hello}}<span class="text-desc"> I'm</span></span>
						<h1 class="capitalize text-title header-title font-title mb-4">{{title}}</h1>
						<p class="text-title header-desc mb-8">{{desc}}</p>
						<a class="uppercase tracking-widest border border-mainColor bg-mainColor text-white hover:bg-transparent hover:text-mainColor transition ease-in-out duration-700 px-12 py-4 rounded self-start" :href="hire">hire me</a>
					</div>
				</div>
			</div>
			<div class="w-full lg:w-1/2 hidden lg:block">
				<img class="header-image w-full object-cover lazyload" :data-src="require(`~/assets/img/${image}`)" alt="abouhilal badr">
			</div>
		</div>
	</header>
</template>

<script>
    export default {
        name: "Header",
		data() {
        	return {
        		title: 'abouhilal badr',
				desc: 'a freelancer web Designer & Developer',
				hello: 'hello,',
				hire: 'mailto:abouhilal.badr@gmail.com',
				image: 'portfolio.png'
			}
		}
    }
</script>

<style scoped>
	.header-image {
		height: 600px;
	}
	.header-title {
		font-size: 50px;
	}
	.header-desc {
		font-size: 40px;
		line-height: 1.4;
	}
</style>
