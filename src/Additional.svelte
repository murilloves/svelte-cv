<script>
	let skills = [
		'JavaScript (ES5, ES6)',
		'ReactJS + Redux',
		'React Native',
		'AngularJS, Angular 2+',
		'Typescript',
		'Ionic 2, 4',
		'Webpack',
		'MongoDB',
		'MySQL',
		'Firebase (SaaS)',
		'Git, Azure, Bitbucket',
		'Heroku',
		'CI / CD',
		'NodeJS, Express',
		'JAVA',
		'JPA',
		'Springboot',
		'Ansi C',
		'UI / UX',
		'Clean Code',
		'Lazy Loading',
		'Sass, Less, Stylus',
	]
</script>

<div class="section-summary">

	<h3 class="subtitle">
        Skills & Additional Information
    </h3>
	<div class="skills">
		{#each skills as skill}
			<span class="skill-balloon">&nbsp;{skill}&nbsp;</span>
			<span>&emsp;</span>
		{/each}
	</div>
	<div class="joke">
		Also a burger lover and a charismatic pianist
	</div>
	<!-- <red> -->
		<!-- <ul class="topic circle"> -->
			<!-- <li><strong>Tools and technology:</strong> MS Office, Photoshop, SAP</li>
			<li><strong>Languages:</strong> French (Fluent) and German (Basic).</li> -->
		<!-- </ul> -->
	<!-- </red> -->

</div>

<style>
	.subtitle {
		text-transform: uppercase;
		text-decoration: underline;
		font-weight: 600;
	}
	ul.circle > li {
		list-style-type: circle;
	}
	li {word-wrap: break-word;}
	red { color: red }
	small {
		color: #373737;
		text-align: center
		/* font-weight: bold;
		font-size: 16px;
		font-variant: diagonal-fractions; */
	}
	.skills {
	    text-align: center;
		font-size: 13px;
		/* font-weight: 600 */
	}
	.skill-balloon {
		background: #e9e9e9;
		border-radius: 4px;
		padding: 1px 1px 2px 1px;
		line-height: 32px;
	}
	.joke {
		margin: 10px 30px;
		font-size: 14px;
		color: #777;
	}
</style>
