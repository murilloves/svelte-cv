<script>
	export let name;
	export let address;
	export let email;
	export let phone;
	export let linkedin;

	// import Achievements from './Achievements.svelte';
	// import Additional from './Additional.svelte';
	// import Interests from './Interests.svelte';
	import Career from './Career.svelte';
	import Education from './Education.svelte';
	import Summary from './Summary.svelte';

	// import common from './styles/common.svelte';

</script>


<div class="div-container">
	<style>
		.div-container {
			max-width: 1280px;
		}
	</style>
	<!-- <Personal /> -->

	<Summary />

	<Career />

	<!-- <Achievements /> -->

	<Education />

	<!-- <Additional /> -->
	
	<!-- <Interests /> -->

	<div>
		<!-- <strong style="font-style: italic; color: #777">
			References available upon request
		</strong> -->
		<div style="
			text-align: center;
			margin-top: 24px;
			font-weight: 600;">
			You can check out more at my personal website:
		</div>
		<div style="
			text-align: center;
			margin-top: 5px;">
			<a href="https://murilloves.github.io/dev/">https://murilloves.github.io/dev/</a>
		</div>
	</div>

</div>
