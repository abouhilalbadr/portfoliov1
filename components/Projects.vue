<template>
	<section class="specialize py-6 lg:py-12">
		<div class="container mx-auto">
			<h2 class="text-4xl lg:text-5xl font-bold text-title font-title mb-4 mx-0 lg:mx-4">{{title}}</h2>
			<p class="text-desc leading-normal w-full lg:w-1/3 mb-8 mx-0 lg:mx-4">{{desc}}</p>
			<carousel :perPage="1" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :loop="true" class="work shadow-xl p-6 lg:p-12 rounded-lg bg-white mx-0 lg:mx-4">
				<slide class="flex flex-col lg:flex-row flex-wrap" v-for="(work, i) in works" :key="i">
					<div class="w-full lg:w-1/2">
						<img class="lazyload" :data-src="require(`~/assets/works/${work.image}`)" :alt="work.title">
					</div>
					<div class="w-full lg:w-1/2">
						<div class="flex h-full items-center">
							<div class="content mt-8 lg:mt-0 px-0 lg:px-8">
								<h3 class="text-title font-title text-2xl lg:text-4xl">{{work.title}}</h3>
								<p class="text-desc my-4 leading-normal">{{work.desc}}</p>
								<a class="border bg-mainColor text-white border-mainColor hover:bg-transparent hover:text-mainColor transition ease-in-out duration-700 px-8 py-2 rounded self-start inline-flex items-center" :href="work.link" target="_blank" v-if="work.link != '#'">
									<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
									<span class="ml-4 uppercase tracking-widest">preview</span>
								</a>
							</div>
						</div>
					</div>
				</slide>
			</carousel>
		</div>
	</section>
</template>

<script>
	export default {
        name: "Projects",
		data() {
			return {
				title: 'Latest Work',
				desc: 'You can find here my latest works in UI/UX Design, Front-end and Back-end Development.',
				works: [
					{image: 'sci.png', title: 'SCI Website', link:'https://sci.um6p.ma/', desc: 'With our partners across the world, we will help shape collective intelligence as a new transdisciplinary field, bringing together insights from cognitive science, data science, computer science, political science, and philosophy to meet the challenges of this century.'},
					{image: 'act4com.png', title: 'Craft Products Platform', link:'https://www.figma.com/proto/FX5UIQibBsZf4EJtDgMA4L/Act4Com', desc: 'An online sales platform which aims to exhibit and market local products and Moroccan crafts in order to support cooperatives in need and provide an additional pillar to actions already undertaken from the start of the health crisis.'},
					{image: 'covidata.png', title: 'Covid-19 Stats in Morocco', link:'https://covidata.2m.ma/#/ar', desc: 'Scientists state that the Coronavirus needs an average of 2 to 14 days for symptoms to start showing. It starts with fever followed by a dry cough and after about a week, the person experiences shortness of breath.'},
					{image: 'tantancours.png', title: 'TanTan Cours Platform', link:'https://www.figma.com/proto/2KgDesNcWj6HmzMH44SDbk/TanTan-Cours', desc: 'The TanTan Cours platform allows students to learn French online, to use educational files for French teachers, to also help students with exercises and exams and to correct them by French teachers. experts with a simple contact form.'},
					{image: 'doctors.png', title: 'Doctors Platform', link:'https://www.figma.com/proto/JeGGSBFbVFNl3OMbuPGTc6/Untitled', desc: 'An online platform give the doctors and the patients all they need for making appointments to getting prescriptions and also have a real time chat and video call to facility the appointments and make it much easier for both.'},
					{image: 'highstorm.png', title: 'High Storm', link:'https://highstorm.netlify.app/', desc: 'We help companies boost their revenues through our unique blend of marketing strategies, data-driven growth, and out-of-the-box approaches to customer acquisition.'},
					{image: 'ecomfusion.png', title: 'Ecom Fusion', link:'https://ecomfusion.netlify.app/', desc: 'Discover the new generation of turnkey services to boost your business'},
					{image: 'auicrm.png', title: 'Aui Crm', link:'https://crm.aui.ma/', desc: 'Customer relationship management is the process of managing interactions with existing as well as past and potential customers. It is one of many different approaches that allow a company to manage and analyse its own interactions with its past, current and potential customers.'},
					{image: 'birthlist.png', title: 'Birth List Plugin', link:'http://upsamurai.com/liste-de-naissance/', desc: 'Baby is coming soon and those around you ask you what you want? Easy to create, share and follow, this tool will allow you to get organized in a few clicks! You can also, after birth, create lists for birthday gifts or major events in baby\'s life.'},
					{image: 'evalbot.png', title: 'EvalBot Slack Bot', link:'https://evalbot.ilc.education/', desc: 'This dashboard is for the slack bot EvalBot, you can manage questions & answers of all your members.'},
					// {image: '', title: '', link:'', desc: ''},
					// {image: '', title: '', link:'', desc: ''},
				]
			}
		}
    }
</script>

<style scoped>

</style>
