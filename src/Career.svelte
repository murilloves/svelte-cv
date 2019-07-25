<script>
    const nectarBeginDate = new Date('2018/12/10');
    const today = new Date();

    const monthDiff = (d1, d2) => {
        if (d1.getTime() > d2.getTime()) {
            return 1 + (12 * d1.getFullYear() + d1.getMonth()) - (12 * d2.getFullYear() + d2.getMonth());
        }
        return 1 + (12 * d2.getFullYear() + d2.getMonth()) - (12 * d1.getFullYear() + d1.getMonth());
    }

    const nectarInMonths = monthDiff(nectarBeginDate, today);
</script>

<div class="section-summary">
    <h3 class="subtitle">
        CAREER HISTORY
    </h3>

    <div>
        <strong>Full Stack Developer at Nectar CRM</strong>
        <div class="tiny-desc">Biggest CRM company in Goiás</div>
        <div>Dec 2018 – Present • { nectarInMonths } mos</div>

        <ul class="topic decimal">
            <!-- <li>Highlight responsibilities and key achievements/deliverables.</li> -->
            <li>Develop the main application and work on bugfixes</li>
            <li>Shape the CRM app with the new UX/UI designed set</li>
            <li>Assure no broken functionalities or layout into new releases</li>
            <li>Improve the Backoffice app of the company</li>
        </ul>
        <p>
            made with React and Java Springboot Framework
            During this time I was responsible for X,Y,Z. In order to accomplish this I had to make use of the coding languages A,B,C. I mainly focused on my skills with B, However during this job the combining of my skill and knowledge of these languages lead to to creating a better product. My most interesting project I've done at [company] is to create a [bla bla] that works with [bla bla]. I made sure to communicate frequently which helped decrease risk and allowed us to respond quickly to any unforseen errors.
        </p>
    </div>
    <div>
        <strong>Full Stack Developer at Nussa Sistemas</strong>
        <div>Jun 2015 – Present • 4 years</div>

        <ul class="topic circle">
            <li>Freelance website, mobile apps and web developer.</li>
            <li>Development Languages: Ionic 2/4, Angular 6, NodeJS, React Native, PHP</li>
            <li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
            <li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
            <li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        </ul>

        <p>
            Nussa Sistemas is a company that behold solutions to real state and building
            enterprises.
        </p>
    </div>
    <div>
        <strong>Frontend Developer at Actuar</strong>
        <div>Jul 2017 – Dec 2018 • 1 yr 6 mos</div>

        <ul class="topic upper-roman">
            <li>Analyze, check and set solution proposals</li>
            <li>Estimate the effort for demand attendance</li>
            <li>Perform verification of the artifacts of software engineering (requirements, design, implementation and testing)</li>
            <li>Scrum Master of a team for Actuar, Afig, Trei.no web projects</li>
            <li>Maintain the process of Design and Implementation. Communicate clear instructions to team members. Responsive Web Development applying good programming paradigms like TDD and Clean Code</li>
        </ul>
        <p>
            Development of an ERP focused on gyms and crossfit boxes management. Also maintenance a training mobile app, company websites, blogs and SEO.
        </p>
        <p>
            Actuar is a company which focus on proving technology to gyms and web payment. At aug 2018, the company has approximately 2.000 clients all over Brazil, more than 15.000 users from physic evaluation free webapp and more from TREI.NO app in Brazil and abroad.
        </p>
        <p>
            Worked on the new web management system for academies using Angular 6.
        </p>
    </div>

    <div>
        <strong>Internship Software Developer at Meta</strong>
        <div class="tiny-desc">Biggest CRM company in Goiás</div>
        <div>Feb 2017 – Jul 2017 • 6 mos</div>

        <ul class="topic decimal">
            <li>Improvement of a product to control financial of mobile phone stores, and payment system integration to federal government.</li>
            <li>JAVA Back End programmer with JSP and MongoDB</li>
            <li>Front End developer: HTML, Bootstrap and CSS</li>
            <li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
            <li>Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        </ul>
        <p>
            MetaTecnologia is a company with over 12 years of experience computerizing mobile phone shops.
        </p>
    </div>
</div>

<style>
	.subtitle {
		text-transform: uppercase;
		text-decoration: underline;
	}
	.tiny-desc {
		font-size: 12px;
		font-style: italic;
	}
	ul.circle > li {
		list-style-type: circle;
	}
	ul.decimal > li {
		list-style-type: decimal;
	}
	ul.roman > li {
		list-style-type: lower-roman;
	}
	ul.upper-roman > li {
		list-style-type: upper-roman;
	}
	li {word-wrap: break-word;}
</style>
