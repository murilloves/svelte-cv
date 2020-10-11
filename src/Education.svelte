<script>
	let courses = [
		{ name: 'React Native with NodeJS and Firebase', hours: 28 },
		{ name: 'MERN Stack, Frontend to Backend', hours: 12 },
		{ name: 'Agile management with SCRUM', hours: 10 },
		{ name: 'Complete Javascript 2018 - Fundamentals to Master', hours: 35 },
		{ name: 'Web Design for Web Developers: UI/UX for Websites and Mobile', hours: 8 }
	];
</script>

<div class="section-summary">
    <h3 class="subtitle">
        EDUCATION
    </h3>

    <h4>
        University Degree
    </h4>

    <div class="pb ml-40">
        <row class="pb">
            <flex1>
                2014 - 2018
            </flex1>
            <flex3>
                <div>Universidade Federal de Goias</div>
                <div><strong>Bachelor of Computer Information Systems</strong></div>
            </flex3>
        </row>
        <row>
            <flex1></flex1>
            <flex3>
                <i>Having also studied Computer Science since 2009, which included Formal Languages and Automata Theory, Compilers, Operating Systems, Algorithms and its Complexity.</i>
            </flex3>
        </row>
    </div>

    <!-- <div class="pb">
        <row>
            <flex1>
                2009 - 2014
            </flex1>
            <flex3>
                <div>Universidade Federal de Goias</div>
                <div><strong>60% of Bachelor of Computer Science</strong></div>
            </flex3>
        </row>
    </div> -->

    <h4>
        Certificates
    </h4>
	<ul class="topic font-medium">
		{#each courses as course, i}
			{course.name} <medium>({course.hours}h)</medium>;<br />
		{/each}
	</ul>
</div>


<style>
	.subtitle {
		text-transform: uppercase;
		text-decoration: underline;
		font-weight: 600;
	}

	row { display: flex }
	flex1 { flex: 1 }
	flex3 { flex: 3 }

    .pb { padding-bottom: 1rem }
    .ml-40 { margin-left: 40px }

    h4 {
        text-decoration: none;
		font-size: 16px;
        font-weight: 600;
        margin-left: 20px;
        margin-top: 5px;
        margin-bottom: 10px;
		/* text-transform: uppercase; */
    	/* text-align: center; */
	}
	medium {
        font-size: 12px;
        font-style: italic
    }
	.font-medium {
        font-size: 15px;
        color: #444
    }
</style>
