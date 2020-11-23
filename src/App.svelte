<script>
	export let name;
	export let address;
	export let email;
	export let phone;
	export let linkedin;

	import Summary from './Summary.svelte';
	import Achievements from './Achievements.svelte';
	import Career from './Career.svelte';
	import Education from './Education.svelte';
	import Additional from './Additional.svelte';
	import Interests from './Interests.svelte';

	// import common from './styles/common.svelte';

</script>

<style>
	.div-container {
		margin: 1.5cm;
		margin-top: -0.8cm;
		margin-left: 1.5cm;
	}
</style>

<div class="div-container">
	<!-- <Personal /> -->

	<Summary />

	<Achievements />

	<Career />

	<Education />

	<!-- <Additional /> -->
	
	<Interests />

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
