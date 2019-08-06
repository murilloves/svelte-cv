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
        <strong>Fullstack Developer at Nectar CRM</strong>
        <div class="tiny-desc">Biggest CRM company in Goiás</div>
        <div>Dec 2018 – Present •
        { nectarInMonths / 12 >= 1
            ? `${Math.floor(nectarInMonths/12)}year,
               ${nectarInMonths%12} mos`
            : `${nectarInMonths % 12} mos` }
        </div>

        <!-- WORK A BIT IN THIS PARAGRAPH AFTER -->
        <!-- <red>
            <p>
                Nectar CRM is a startup located in Goiânia which provides solutions for companies for managing relationships with their customers, selling procedures, Business Intelligence and a lot more. Integrated with Google Calendar, RD Station and a huge set of enterprises...

                During this time I was responsible for X,Y,Z. In order to accomplish this I had to make use of the coding languages A,B,C. I mainly focused on my skills with B, However during this job the combining of my skill and knowledge of these languages lead to to creating a better product. My most interesting project I've done at [company] is to create a [bla bla] that works with [bla bla]. I made sure to communicate frequently which helped decrease risk and allowed us to respond quickly to any unforseen errors.
            </p>
        </red> -->

        <ul class="topic">
            <!-- <li>Highlight responsibilities and key achievements/deliverables.</li> -->
            <li>Cooperated on the development of the main application, helping to implement TDD</li>
            <li>Shaped the CRM app with the new UX/UI set</li>
            <li>Improved the Backoffice webapp of the company</li>
            <li>Developed new functionalities into the software</li>
            <!-- <li>React and Java Springboot Framework</li> -->
        </ul>
    </div>
    <div>
        <strong>Fullstack Developer at Nussa Sistemas</strong>
        <div>
            Jun { nussaBeginDate.getFullYear() }
            – Present • { Math.floor(nussaInMonths / 12) } years, { nussaInMonths % 12 } mos
        </div>

        <ul class="topic">
            <li>Freelancer web developer, mobile apps, PWAs and websites</li>
            <li>Tech Stacks: Ionic 2+, MEAN, MERN, PHP (Wordpress), Firebase</li>
            <li>Experience in data consumption optimization</li>
        </ul>

        <p class="italic">
            Some projects I worked for Nussa Sistemas were: mobile app for package delivery, PWA for medical congresses, webapp with daily liturgy for Goiânia Archdiocese.
        </p>
    </div>
    <div class="pt">
        <strong>Frontend Developer at Actuar</strong>
        <div class="tiny-desc">Leading provider of academic software in Brazil</div>
        <div>Jul 2017 – Dec 2018 • 1 yr 6 mos</div>

        <p class="italic">
            Actuar is a company which focus on proving technology to gyms and web payment. As of August 2018, the company had approximately 2.000 throughout Brazil, more than 15.000 users from physic evaluation free webapp and thousands from TREI.NO app in Brazil and abroad. In 18 months I was able to:
        </p>

        <ul class="topic">
            <li>Lead a team of developers applying SCRUM and working on the development of an ERP focused on gyms management and crossfit boxes</li>
            <li>Estimate the effort for new demands and performed verification of the artifacts of software engineering such as requirements, design, implementation and testing</li>
            <li>Develop the math logic for payment methods, discounts and bonus </li>
            <li>Create webcomponent for scheduling software implantation and support inspection visits</li>
            <li>Give maintenance on a training app. Made responsive blogs and webpages for the company, also performing SEO</li>
        </ul>
    </div>

    <div>
        <strong>Internship Software Developer at Meta</strong>
        <div>Feb 2017 – Jul 2017 • 6 mos</div>

        <p class="italic">
            MetaTecnologia is a company with over 12 years of experience computerizing mobile phone shops. There I worked on the improvement of a product to control financial of mobile phone stores, and payment system integration to federal government. I was a Fullstack developer, I studied and handled JAVA and MongoDB on backend and JSP, HTML, Bootstrap and CSS for frontend.
        </p>
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
    .italic {
        font-style: italic;
    }
	/* ul.circle > li {
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
    } */
    .pt { padding-top: 2rem }
	li {word-wrap: break-word;}
    red {color:red}
</style>
