<script>
    const clubienBeginDate = new Date('2020/07/15');
    const nectarBeginDate = new Date('2018/11/10');
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

    const clubienInMonths = monthDiff(clubienBeginDate, today);
    const nectarInMonths = monthDiff(nectarBeginDate, today);
    const nussaInMonths = monthDiff(nussaBeginDate, nectarBeginDate);
</script>

<div class="section-summary">
    <h3 class="subtitle">
        CAREER
    </h3>

    <div>
        <strong>Frontend Developer at Nectar CRM</strong>
        <div class="tiny-desc">Biggest CRM company in Brazilian's midwest</div>
        <div>Nov 2018 – Present •
        { nectarInMonths / 12 >= 1
            ? `${Math.floor(nectarInMonths/12)} yrs
               ${nectarInMonths % 12 !== 0 ? ', ' + nectarInMonths % 12 + ' mos' : ''}`
            : `${nectarInMonths % 12} mos` }
        </div>

        <p class="italic">
            Nectar is a regional CRM company which provides solutions for companies to manage relationships with their customers, selling procedures, Business Intelligence and a lot more.
            Integrated with Google, RD Station and a huge set of tools and enterprises, it helps companies boosts their sales process and strategy.
        </p>

        <p>Responsibilities:</p>
        <ul class="topic">
            <!-- <li>Highlight responsibilities and key achievements/deliverables.</li> -->
            <li>Refactor of the Webapp with the new UX/UI set</li>
            <li>Development of new functionalities to the main software</li>
            <li>Create personalized documentation to help new hired developers to understand the applications</li>
            <li>Helped developing the new Mobile Application using React Native</li>

            <li>Development of Nectar CRM's main web app and bug solving issues</li>
            <li>Improvements on company's Backoffice app</li>
        </ul>
    </div>
    <div class="pt-1">
        <strong>Mobile Application Developer and Web Developer at Clubien</strong>
        <div class="tiny-desc">Wellness Delivery startup in Ireland</div>
        <div>Jul 2020 – Present •
        { clubienInMonths / 12 >= 1
            ? `${Math.floor(clubienInMonths/12)} yrs
               ${clubienInMonths % 12 !== 0 ? ', ' + clubienInMonths % 12 + ' mos' : ''}`
            : `${clubienInMonths % 12} mos` }
        </div>

        <p class="italic">
            Clubien is a Dublin-based startup who helps people Find the best beauty and grooming professionals and book treatments at home.
        </p>

        <p>Main Mobile Developer:</p>
        <ul class="topic">
            <li>Lead of Clubien's Mobile APP development</li>
            <li>UI and UX primary responsible</li>
            <li>Enforce a reliable app performance and integrity</li>
        </ul>

        <p>Web Developer:</p>
        <ul class="topic">
            <li>Improvements at Clubien's website and creation of the landing pages for customers and professionals</li>
            <li>Co-development of Admin's interface, Rest integration with company API</li>
        </ul>
    </div>
    <div class="pt-1">
        <strong>Frontend Developer at Actuar</strong>
        <div class="tiny-desc">Leading provider of academic software in Brazil</div>
        <div>Jul 2017 – Nov 2018 • 1 yr 5 mos</div>

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
    <div class="pt-1">
        <strong>Fullstack Developer at Nussa Sistemas (Contractor)</strong>
        <div>
            Jun { nussaBeginDate.getFullYear() }
            – Feb { 1 + nectarBeginDate.getFullYear() } • { Math.floor(nussaInMonths / 12) } yrs, { 2 + nussaInMonths % 12 } mos
        </div>

        <ul class="topic">
            <li>Freelancer web developer, mobile apps, PWAs and websites</li>
            <li>Tech Stacks: Ionic 2+, MEAN, MERN, PHP (Wordpress), Firebase</li>
            <li>Experience in data consumption optimization</li>
        </ul>

        <p class="italic">
            Some projects I worked for Nussa Sistemas were:
            mobile app for package delivery, PWA for medical congresses, daily liturgy webapp for Archdioceses and a Social Network including real time chat.
        </p>
    </div>

    <div class="pt-1">
        <strong>Internship Software Developer at Meta</strong>
        <div>Feb 2017 – Jul 2017 • 6 mos</div>

        <p class="italic">
            MetaTecnologia is a company with large experience in computerizing mobile phone shops.
            There I worked on the improvement of a product to control financial of mobile phone stores, and payment system integration to federal government.
            I was a Fullstack developer, I studied and handled JAVA and MongoDB on backend and JSP, HTML, Bootstrap and CSS for frontend.
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
    .pt-1 { padding-top: 1rem }
	li {word-wrap: break-word;}
</style>
