<template>
	<section class="specialize py-6 lg:py-12">
		<div class="container mx-auto">
			<h2 class="text-4xl lg:text-5xl font-bold text-title font-title mb-4 mx-0 lg:mx-4">{{title}}</h2>
			<p class="text-desc leading-normal w-full lg:w-1/3 mb-8 mx-0 lg:mx-4">{{desc}}</p>
			<div class="flex flex-col lg:flex-row flex-wrap">
				<div class="w-full lg:w-1/3" v-for="(spec, i) in specs" :key="i">
					<div class="hover:bg-mainColor spec px-8 py-16 rounded-lg transition ease-in-out duration-700 mx-0 lg:mx-4 mb-4 lg:mb-0 cursor-pointer text-title hover:text-white border border-bgColor hover:border-mainColor">
						<h3 class="text-2xl font-bold mb-4 relative z-10">{{spec.title}}</h3>
						<p class="opacity-75 leading-normal relative z-10">{{spec.desc}}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
    export default {
        name: "Specialize",
		data() {
        	return {
        		title: 'Specializing in',
				desc: 'I\'m ambitious and love new challenges. My vast variety of skills is continuously expanding :)',
				specs: [
					{title: 'UI/UX Design', desc: 'I love to work in User Experience & User Interface designing and try my best to make the best UX with good UI.'},
					{title: 'Front-end Development', desc: 'Take my design and make it alive is one of the happiest thing that frontend development give me.'},
					{title: 'Back-end Development', desc: 'Architect websites, secure it and make connection with databases it\'s like making tactical war strategies.'},
				]
			}
		}
    }
	// Working with javascript every day for more than 7 years make it the preferred language for me.
</script>

<style scoped>
	.spec:hover {
		box-shadow: 0 22px 45px 0 rgba(0,0,0,.1);
		transform: translateY(-4px);
	}
</style>
