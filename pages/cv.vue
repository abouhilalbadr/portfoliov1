<template>
	<div class="code-wrap py-6 lg:py-12 min-h-screen">
		<div class="container mx-auto">
			<h1 class="mb-8 text-title">My CV /&gt;</h1>
			<div data-line-nr="01" class="code-l">
				<div class="methods">class</div>
				<span class="propname">Abouhilal Badr</span> {
			</div>
			<div data-line-nr="02" class="code-l">
				<div class="dot">··</div>
				<div class="comment">// I'm ambitious and love new challenges :)</div>
			</div>
			<div data-line-nr="03" class="code-l">
				<div class="dot">··</div>
				<div class="comment">// My vast variety of skills is continuously expanding.</div>
			</div>
			<div data-line-nr="04" class="code-l">
				<div class="dot">··</div>
				<div class="methods">constructor</div>
				() {
			</div>
			<div data-line-nr="05" class="code-l">
				<div class="dot">····</div>
				<span class="scope">this</span>.<span class="prop2">name</span> <span class="scope">=</span> <span class="string">'Abouhilal Badr'</span>
			</div>
			<div data-line-nr="06" class="code-l">
				<div class="dot">····</div>
				<span class="scope">this</span>.<span class="prop2">dayOfBirthTimestamp</span> <span class="scope">=</span> <span class="number">748224000</span>
			</div>
			<div data-line-nr="07" class="code-l">
				<div class="dot">····</div>
				<span class="scope">this</span>.<span class="prop2">email</span> <span class="scope">=</span> <span class="string">'abouhilal.badr@gmail.com'</span>
			</div>
			<div data-line-nr="08" class="code-l">
				<div class="dot">··</div>
				}
			</div>
			<div data-line-nr="09" class="code-l">
				<div class="dot">··</div>
				<span class="propname">workExperience</span>() {
			</div>
			<div data-line-nr="10" class="code-l">
				<div class="dot">····</div>
				<div class="methods">return</div>
				[
			</div>

			<div data-line-nr="11" class="code-l">
				<div class="dot">······</div>
				{ <span class="string">'2017-now'</span>:<span class="string"> 'Front-end Developer at Freelance.'</span> }
			</div>
			<div data-line-nr="12" class="code-l">
				<div class="dot">······</div>
				{ <span class="string">'2013-2017'</span> :<span class="string"> 'Full-Stack Designer/developer at Freelance.'</span> }
			</div>
			<div data-line-nr="13" class="code-l">
				<div class="dot">····</div>
				]
			</div>
			<div data-line-nr="14" class="code-l">
				<div class="dot">··</div>
				}
			</div>
			<div data-line-nr="15" class="code-l">
				<div class="dot">··</div>
				<span class="propname">education</span>() {
			</div>
			<div data-line-nr="16" class="code-l">
				<div class="dot">····</div>
				<div class="methods">return</div>
				[
			</div>
			<div data-line-nr="17" class="code-l">
				<div class="dot">······</div>
				{ <span class="string">'2019-now'</span>:<span class="string"> 'Student at 1337 Benguerir'</span> },
			</div>
			<div data-line-nr="18" class="code-l">
				<div class="dot">······</div>
				{ <span class="string">'2016-2018'</span>:<span class="string"> 'Specialized Technician in computer networks'</span> },
			</div>
			<div data-line-nr="19" class="code-l">
				<div class="dot">······</div>
				{ <span class="string">'2014-2016'</span>:<span class="string"> 'Technician in computer networks'</span> }
			</div>
			<div data-line-nr="20" class="code-l">
				<div class="dot">····</div>
				]
			</div>
			<div data-line-nr="21" class="code-l">
				<div class="dot">··</div>
				}
			</div>
			<div data-line-nr="22" class="code-l">
				<div class="dot">··</div>
				<span class="propname">skills</span>() {
			</div>
			<div data-line-nr="23" class="code-l">
				<div class="dot">····</div>
				<div class="methods">return</div>
				[ <span class="string">'HTML5.1/CSS4/JS', 'Vue.js', 'Nuxt.js', 'Node.js', 'TailwindCSS/Bootstrap/Bulma', 'Webpack/Gulp', 'SASS', 'npm/yarn', 'PWA', 'SSR', 'SPA', 'GIT', 'Electron', 'Firebase, 'PHP', 'MySQL', 'Wordpress', 'Laravel', 'Figma', 'UX/UI', 'Networking', 'Docker', 'Linux Administration', </span> <span class="cursor"></span> ]
			</div>
			<div data-line-nr="24" class="code-l">
				<div class="dot">··</div>
				}
			</div>
			<div data-line-nr="25" class="code-l">}</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "cv",
		head() {
			return {
				title: 'Abouhilal Badr - CV'
			}
		}
    }
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap');
	.code-wrap {
		font-family: Roboto Mono,Courier New,Courier,monospace!important;
		background: #151515;
		color: #ffffff;
		line-height: 1.6;
		font-size: 16px;
	}
	.code-l {
		z-index: 1;
		position: relative;
	}
	.code-l:after {
		content: attr(data-line-nr);
		position: absolute;
		left: -60px;
		color: #3b3553;
		font-family: Roboto,Courier New,Courier,monospace!important;
		font-size: 16px;
		line-height: 1.6;
		z-index: 3;
		top: 0;
	}
	.dot {
		color: #3b3553;
		display: inline;
	}
	.comment {
		color: #78707e;
		display: inline;
	}
	.methods {
		color: #c677dd;
		display: inline;
	}
	.propname {
		color: #caaa6e;
	}
	.scope {
		color: #c35f67;
		display: inline;
	}
	.prop2 {
		color: #60aeee;
	}
	.string {
		color: #98c379;
	}
	.number {
		color: #d09966;
	}
	.cursor::after {
		content: '';
		width: 6px;
		height: 20px;
		display: inline-block;
		vertical-align: bottom;
		background-color: #24e33a;
		animation: blink 1s infinite;
	}
	@keyframes blink{
		0%,100%{
			opacity:1
		}
		50%{
			opacity:0
		}
	}
</style>
