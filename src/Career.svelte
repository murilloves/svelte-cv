<script>
    const nectarBeginDate = new Date('2018/12/10');
    const nussaBeginDate = new Date('2015/6/15');
    const today = new Date();

    const monthDiff = (d1, d2) => {
        if (d1.getTime() > d2.getTime()) {
            let buff = d2;
            d2 = d1;
            d1 = buff;
        }
        return 1
            + (12 * d2.getFullYear() + d2.getMonth())
            - (12 * d1.getFullYear() + d1.getMonth());
    }

    const nectarInMonths = monthDiff(nectarBeginDate, today);
    const nussaInMonths = monthDiff(nussaBeginDate, today);
</script>

<div class="section-summary">
    <h3 class="subtitle">
        CAREER HISTORY
    </h3>

    <div>
        <strong>Full Stack Developer at Nectar CRM</strong>
        <div class="tiny-desc">Biggest CRM company in Goiás</div>
        <div>Dec 2018 – Present •
        { nectarInMonths / 12 >= 1
            ? `${Math.floor(nectarInMonths/12)}year,
               ${nectarInMonths%12} mos`
            : `${nectarInMonths % 12} mos` }
        </div>

        <ul class="topic">
            <!-- <li>Highlight responsibilities and key achievements/deliverables.</li> -->
            <li>Helped on the development of the main application and worked on bugfixes</li>
            <li>Shaped the CRM app with the new UX/UI set</li>
            <li>Increased new functionalities into the software</li>
            <li>Improved the Backoffice app of the company</li>
        </ul>
        <red>
            <p>
                made with React and Java Springboot Framework
                During this time I was responsible for X,Y,Z. In order to accomplish this I had to make use of the coding languages A,B,C. I mainly focused on my skills with B, However during this job the combining of my skill and knowledge of these languages lead to to creating a better product. My most interesting project I've done at [company] is to create a [bla bla] that works with [bla bla]. I made sure to communicate frequently which helped decrease risk and allowed us to respond quickly to any unforseen errors.
            </p>
        </red>
    </div>
    <div>
        <strong>Full Stack Developer at Nussa Sistemas</strong>
        <div>
            Jun { nussaBeginDate.getFullYear() }
            – Present • { Math.floor(nussaInMonths / 12) } years, { nussaInMonths % 12 } mos
        </div>

        <ul class="topic">
            <li>Freelancer web developer, mobile apps, PWAs and websites</li>
            <li>Tech Stacks: Ionic 2+, MEAN, MERN, PHP (Wordpress), Firebase</li>
            <li>Experience in data consumption optimization</li>
        </ul>

        <red>
            <p>
                Nussa Sistemas is a company that behold solutions to real state and building
                enterprises.
            </p>
        </red>
    </div>
    <div>
        <strong>Frontend Developer at Actuar</strong>
        <div class="tiny-desc">Leading provider of academic software in Brazil</div>
        <div>Jul 2017 – Dec 2018 • 1 yr 6 mos</div>

        <ul class="topic">
        <red>
            <li>Analyze, check and set solution proposals</li>
            <li>Estimate the effort for demand attendance</li>
            <li>Perform verification of the artifacts of software engineering (requirements, design, implementation and testing)</li>
            <li>Scrum Master of a team for Actuar, Afig, Trei.no web projects</li>
        </red>
            <li>Maintain the process of Design and Implementation. Communicate clear instructions to team members. Responsive Web Development applying good programming paradigms like TDD and Clean Code</li>
            <!-- <li>Develop complex interfaces for payment holding discounts and bonus logic</li> -->
        </ul>
        <i>
            <red>(talvez essa parte abaixo devesse ser tópicos)</red>
            <p>
                Led a team of developers applying SCRUM. Worked on the development of an ERP focused on gyms and crossfit boxes management.
            </p>
            <!-- <p>
                Actuar is a company which focus on proving technology to gyms and web payment. At aug 2018, the company has approximately 2.000 clients all over Brazil, more than 15.000 users from physic evaluation free webapp and more from TREI.NO app in Brazil and abroad.
            </p> -->
            <p>
                Gave maintenance on a training app. Made responsive websites and blogs for the company, also performing SEO.
            </p>
        </i>
    </div>

    <div>
        <strong>Internship Software Developer at Meta</strong>
        <div>Feb 2017 – Jul 2017 • 6 mos</div>

        <ul class="topic">
            <li>Improvement of a product to control financial of mobile phone stores, and payment system integration to federal government.</li>
            <li>JAVA Back End programmer with JSP and MongoDB</li>
            <li>Frontend developer: HTML, Bootstrap and CSS</li>
        </ul>
        <red>
            <p>
                MetaTecnologia is a company with over 12 years of experience computerizing mobile phone shops. 
            </p>
        </red>
    </div>
</div>

<style>
	.subtitle {
		text-transform: uppercase;
		text-decoration: underline;
		font-weight: 600;
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
    red {color:red}
</style>
