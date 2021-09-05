<template>
	<div class="ab">
		<Header />
		<Clients />
		<Specialize />
		<Projects />
		<Why />
		<Testimonial />
		<Contact />
	</div>
</template>

<script>
import Header from '~/components/Header.vue'
import Clients from '~/components/Clients.vue'
import Specialize from '~/components/Specialize.vue'
import Projects from '~/components/Projects.vue'
import Why from '~/components/Why.vue'
import Testimonial from '~/components/Testimonial.vue'
import Contact from '~/components/Contact.vue'

export default {
	components: {
		Header,
		Clients,
		Specialize,
		Projects,
		Why,
		Testimonial,
		Contact
	},
	head() {
		return {
			title: 'Abouhilal Badr'
		}
	}
}
</script>

<style>
	/* Sample `apply` at-rules with Tailwind CSS
	.container {
	  @apply min-h-screen flex justify-center items-center text-center mx-auto;
	}
	*/
</style>
