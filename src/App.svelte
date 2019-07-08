<script>
	export let name;
	export let address;
	export let email;
	export let phone;
	export let linkedin;

	import Personal from './Personal.svelte';
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
		margin-left: 2.5cm;
	}
</style>

<div class="div-container">
	<!-- <Personal /> -->

	<Summary />

	<Achievements />

	<Career />

	<Education />

	<Additional />
	
	<Interests />

	<div>
		<strong style="font-style: italic">
			References available upon request
		</strong>
	</div>

</div>
