<template>
    <section class="relative clients mb-6 lg:mb-0">
		<div class="container lg:w-2/3 mx-auto flex flex-col lg:flex-row flex-wrap bg-white py-8 rounded-lg shadow-xl">
			<div class="w-full lg:w-1/5 flex justify-center" v-for="(logo, i) in logos" :key="i">
				<img class="logos mb-8 lg:mb-0 lazyload" :data-src="require(`~/assets/logos/${logo}`)" :alt="logo.split('.')[0]">
			</div>
		</div>
	</section>
</template>

<script>
    export default {
		name: "Clients",
		data() {
			return {
				logos: ['um6p.png', 'sci.png', '1337.png', '2m.png', '1450.png'],
			}
		}
	}
</script>

<style scoped>
	.clients {
		top: -60px;
	}
	.logos {
		filter: grayscale(100%);
		opacity: .8;
		transition: all .5s ease-in-out;
	}
	.logos:hover {
		filter: grayscale(0);
		opacity: 1;
	}

	@media (max-width: 768px) {
		.clients {
			top: 0;
		}
	}
</style>
