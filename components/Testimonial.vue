<template>
	<section class="container mx-auto py-6 lg:py-12">
		<h2 class="leading-normal w-full lg:w-1/3 text-4xl lg:text-5xl font-bold text-title font-title mb-4 mx-0 lg:mx-4">{{title}}</h2>
		<!-- <carousel :perPage="1" :perPageCustom="[[768, 1], [1024, 2]]" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :loop="true"> -->
		<div class="flex flex-col lg:flex-row flex-wrap">
			<div class="w-full lg:w-1/2" v-for="(item, i) in people" :key="i">
				<div class="testi hover:bg-mainColor cursor-pointer rounded-lg transition ease-in-out duration-700 p-6 lg:p-12 rounded-lg bg-white mx-0 lg:mx-4 mb-8 lg:mb-0 text-title hover:text-white h-full">
					<div class="flex flex-col lg:flex-row flex-wrap">
						<div class="w-full lg:w-1/6">
							<img :data-src="require(`~/assets/people/${item.image}`)" :alt="item.name" class="rounded-full border-4 border-white lazyload">
						</div>
						<div class="w-full lg:w-5/6">
							<h3 class="font-title text-2xl ml-4 mb-2">{{item.name}}</h3>
							<span class="opacity-50 ml-4 leading-normal block">{{item.job}}</span>
						</div>
					</div>
					<p class="opacity-75 mt-8 leading-normal">{{item.comment}}</p>
				</div>
			</div>
		</div>
		<!-- </carousel> -->
	</section>
</template>

<script>
    export default {
        name: "Testimonial",
		data() {
			return {
				title: 'People Are Saying...',
				people: [
					{image: 'lex.jpeg', name: 'Lex Paulson', job: 'Executive Director at UM6P School of Collective Intelligence; Associé at SCIAM', comment: 'Fantastic and rapid work on our website -- a great coder and true professional. Bravo Badr.'},
					{image: 'camille.jpeg', name: 'Camille Larmanou', job: 'External Affairs Officer', comment: 'The School of Collective Intelligence can not thank Badr enough for his lightning speed, flexibility and quality work on our website frontend design. We got access to exactly the features we needed, all in record time. A warm thank you and a strong recommendation from all of us at the School.'},
				]
			}
		}
    }
</script>

<style scoped>
	.testi:hover {
		box-shadow: 0 22px 45px 0 rgba(0,0,0,.1);
		transform: translateY(-4px);
	}
</style>
