<script>
    const reveloStartDate = new Date('2022/01/10');
    const reveloEndDate = new Date('2025/04/15');

    const sevenappsStartDate = new Date('2020/12/28');
    const sevenappsEndDate = new Date('2021/11/02');
    const clubienStartDate = new Date('2020/07/15');
    const clubienEndDate = new Date('2020/12/10');
    const nectarStartDate = new Date('2018/11/10');
    const nectarEndDate = new Date('2020/12/31');
    // const nussaStartDate = new Date('2015/3/15');
    // const nussaEndDate = new Date('2017/6/10');
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

    const reveloInMonths = monthDiff(reveloStartDate, reveloEndDate);
    const sevenappsInMonths = monthDiff(sevenappsStartDate, sevenappsEndDate);
    const clubienInMonths = monthDiff(clubienStartDate, clubienEndDate);
    const nectarInMonths = monthDiff(nectarStartDate, nectarEndDate);
    // const nussaInMonths = monthDiff(nussaStartDate, nussaEndDate);
</script>

<div class="section-summary">
    <h3 class="subtitle">
        CAREER
    </h3>

    <div>
        <strong class="company-name">Senior Frontend Engineer at Revelo</strong>
        <div class="tiny-desc">Squad Supply Frontend Specialist</div>
        <div>Dec 2021 – Apr 2025 •
        { reveloInMonths / 12 >= 1
            ? `${Math.floor(reveloInMonths/12)}
                yrs${reveloInMonths % 12 !== 0 ? ', ' + reveloInMonths % 12 + ' mos' : ''}`
            : `${reveloInMonths % 12} mos` }
        </div>

        <p>
            &emsp;
            Revelo is a company based in the US that allocates top-notch staff from Brazil and LATAM to
            corporations that are willing to have the best software engineers from those countries.
            
            The developers are responsible for understanding the corporation's goals and providing
            the best service, based on their core business with a high quality control of software.
        </p>

        <p class="mb-1">
            <strong>
                Role:
            </strong>
        </p>
        <p class="mt-1">
            &emsp;
            In my position as a Developer at Revelo, I've been a contractor for a single company,
            a Fintech-related whose goal is to provide information that educates users in making financial decisions.
            My assignments are:
        </p>

        <ul class="topic">
            <!-- <li>Highlight responsibilities and key achievements/deliverables.</li> -->
            <li>Spearheaded the creation of a robust style guide to align branding across the entire application, enhancing UI/UX coherence, reducing new feature development time by 50% for Fullstack developers after implementing the shared component library.</li>
            <li>Built a scalable, reusable component library from the ground up using Atomic Design principles and based on Tailwind UI, cutting UI inconsistencies by 80% by enforcing standardized design tokens and components.</li>
            <!-- <li>Implemented server-side rendering (SSR) with Next.js, significantly improving SEO performance and initial load times.</li> -->
            <li>Developed and maintained admin interfaces using React, TypeScript, and GraphQL, streamlining internal operations for the client’s financial platform, reducing support requests from analysts by 30% to 40% after launching the custom dashboard.</li>
            <li>Wrote automated tests (unit and integration) using tools like Jest and React Testing Library, resulting in improved code quality and reduced regression issues, also reducing the QA time spent in catching recurrent bugs.</li>
            <li>Reduced build warnings and deprecated APIs by upgrading to the latest versions of React and related packages, also wipping out useEffect, useMemo and other React hooks commom mistakes from the codebase.</li>
            <!-- <li>Collaborated closely with product and design teams, delivering UI components and views that matched high-fidelity Figma prototypes.</li> -->

<!--             
            
            <li>
                Help building out a style guide and core set of React components and templates.
            </li>
            <li>
                Use of Highcharts to build tailored Dashboards and data analysis for companies, also real-time data visualization
                through the use of Line, Area, Column Pie charts and other.
            </li>
            <li>
                Design and build admin interfaces so our business analysts can seamlessly update website content and easily get analytics reports to track performance.
            </li>
            <li>
                Build tests using tools like Jest and Cypress to ensure the components are reliable enough.
            </li>
            <li>
                Update third part packages to it's most modern and seccure versions.
            </li> -->
        </ul>

        <p class="mb-1">
            <strong>
                Tech Stack:
            </strong>
        </p>
        <small>
            Git, ReactJS, Highcharts, Typescript, Unit + E2E testing, NextJS, Redux, React Hooks, Context API, Zustand, Atomic Design, Vite, Styled Components,
            Tailwind, React Bootstrap, Ruby on Rails, GraphQL, Webpack, HTML5, SCSS, Babel.
        </small>

    </div>
    <div class="mt-3">
        <strong class="company-name">Senior Frontend Developer at SevenApps LLC</strong>
        <div class="tiny-desc">Developer Squad Supply Specialist</div>
        <div>Dec 2020 – Nov 2021 •
        { sevenappsInMonths / 12 >= 1
            ? `${Math.floor(sevenappsInMonths/12)}
                yr${sevenappsInMonths % 12 !== 0 ? ', ' + sevenappsInMonths % 12 + ' mos' : ''}`
            : `${sevenappsInMonths % 12} mos` }
        </div>

        <p>
            <strong>
                Role:
            </strong>
        </p>
        <p>
            &emsp; As a Developer at SevenApps, I worked on three projects.
            The most significant company was FanHero. There I helped with their newest version for the
            webapp for clients, which has the need of handling millions of simultaneous connections, hence
            thinking about solutions for problems like requests, performance, security among other issues.
        </p>

        <p>
            <strong>
                Projects:
            </strong>
        </p>
        <ul class="topic">
            <li>FanHero Portal, Webapp</li>
            <li>Mindlab: MindZup - Gamificated application for students</li>
            <li>BestBarbers: Barber Management SaaS</li>
        </ul>

        <p>
            <strong>
                Tech Stack:
            </strong>
        </p>
        <small>
            Git, ReactJS, NodeJS, NextJS, React Native, ES7, TDD, Clean Code, Redux, React Hooks, Context API, Atomic Design, Styled Components, Chakra UI,
            Rest, GraphQL, Gulp, Webpack, Babel, Docker, Google Cloud.
        </small>

    </div>
    <div class="mt-3">
        <strong class="company-name">Frontend Developer at Nectar CRM</strong>
        <div class="tiny-desc">Biggest CRM company in Brazilian's midwest</div>
        <div>Nov 2018 – Dec 2020 •
        { nectarInMonths / 12 >= 1
            ? `${Math.floor(nectarInMonths/12)}
                yrs${nectarInMonths % 12 !== 0 ? ', ' + nectarInMonths % 12 + ' mos' : ''}`
            : `${nectarInMonths % 12} mos` }
        </div>

        <p>
            Nectar is a regional CRM company which provides solutions for companies to manage relationships with their customers, selling procedures, Business Intelligence and a lot more.
            Integrated with Google, RD Station and a huge set of tools and enterprises, it helps companies boosts their sales process and strategy.
        </p>

        <p>
            <strong>
                Role:
            </strong>
        </p>
        <ul class="topic">
            <!-- <li>Highlight responsibilities and key achievements/deliverables.</li> -->
            <li>Refactor of the Webapp with the new UX/UI set</li>
            <li>Development of new functionalities to the main software</li>
            <li>Create personalized documentation to help new hired developers to understand the applications</li>
            <li>Helped developing the new Mobile Application using React Native</li>

            <li>Development of Nectar CRM's main web app and bug solving issues</li>
            <li>Improvements on company's Backoffice app</li>
        </ul>

        <p>
            <strong>
                Tech Stack:
            </strong>
        </p>
        <small>
            AngularJS, Azure, NodeJS, Karma, TDD, ReactJS, React Native, Redux, Vue 2, HTML5, ES7, CSS3, Sass, Rest, Gulp, JSP, Git, Java 8.
        </small>

    </div>
    <!-- <div class="pt-1">
        <strong class="company-name">Mobile Developer and Web Developer at Clubien (Contractor)</strong>
        <div class="tiny-desc">Wellness Delivery startup in Ireland</div>
        <div>Jul 2020 – Dec 2020 •
        { clubienInMonths / 12 >= 1
            ? `${Math.floor(clubienInMonths/12)} yrs
               ${clubienInMonths % 12 !== 0 ? ', ' + clubienInMonths % 12 + ' mos' : ''}`
            : `${clubienInMonths % 12} mos` }
        </div>

        <p>
            Clubien was a Dublin-based startup who helps people find the best beauty and grooming professionals and book treatments at home.
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

        <p>Tech Stack:</p>
        <p>React Native, NextJS, React, Redux, Jest, Rest, Git, Tailwind CSS.</p>
    </div> -->
    <div class="pt-1">
        <strong class="company-name">Frontend Developer at Actuar</strong>
        <div class="tiny-desc">Leading provider of academic software in Brazil</div>
        <div>Jul 2017 – Nov 2018 • 1 yr 5 mos</div>

        <p>
            Actuar is a company which focus on proving technology to gyms and web payment.
            <!-- As of August 2018, the company had approximately 2.000 throughout Brazil, more than 15.000 users from physic evaluation free webapp and thousands from TREI.NO app in Brazil and abroad. -->
            In 18 months I was able to:
        </p>

        <ul class="topic">
            <li>Lead a team of developers applying SCRUM and working on the development of an ERP focused on gyms management and crossfit boxes</li>
            <li>Estimate the effort for new demands and performed verification of the artifacts of software engineering such as requirements, design, implementation and testing</li>
            <li>Give maintenance on a training app. Made responsive blogs and webpages for the company, also performing SEO</li>
        </ul>

        <p>
            <strong>
                Tech Stack:
            </strong>
        </p>
        <small>
            Angular 2+, Ionic 2, Azure, Typescript, Jest, Angular JS, Wordpress, Scrum, HTML5, ES6, CSS3, Sass, SVG, Git.
        </small>
    </div>

    <div class="pt-1">
        <strong class="company-name">Internship Software Developer at MetaTecnologia</strong>
        <div>Feb 2017 – Jul 2017 • 6 mos</div>

        <!-- <p>
            MetaTecnologia is a company with large experience in computerizing mobile phone shops.
            There I worked on the improvement of a product to control financial of mobile phone stores, and payment system integration to federal government.
            I was a Fullstack developer, I studied and handled a Fullstack setup.
        </p> -->

        <p>Tech Stack:</p>
        <p> JAVA, MongoDB, JSP, HTML and CSS with Bootstrap.</p>
    </div>

    <!-- <div class="pt-1">
        <strong class="company-name">Developer at Nussa Sistemas (Contractor)</strong>
        <div>
            Mar { nussaStartDate.getFullYear() }
            – Jun { nussaEndDate.getFullYear() } • { Math.floor(nussaInMonths / 12) } yrs, { nussaInMonths % 12 } mos
        </div>
        
        <p>Description:</p>
        <ul class="topic">
            <li>Freelancer web developer, mobile apps, PWAs and websites</li>
            <li>Experience in data consumption and optimization</li>
            <li>Fullstack developer, responsible for handling entire Webapps from Backend to Frontend</li>
            <li>Webapps Deployment and its CI/CD</li>
        </ul>

        <p>
            Some projects I worked for Nussa Sistemas were:
            mobile app for package delivery,
            PWA for medical congresses, daily liturgy webapp for Archdioceses and a Social Network including real time chat.
        </p>
        
        <p>Tech Stack:</p>
        <p>Angular 2+, Ionic 2+, React JS, React Native, Node JS + Express, Mongo DB, Firebase, CI/CD, Heroku, PHP and Wordpress.</p>
    </div> -->
    
    <style>
        .company-name {
            font-size: 1.2rem;
        }
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
   
        .topic { font-size: 0.9rem }
        .topic li {
            margin: 0.4rem 0
        }

        .mt-0 { margin-top: 0 }
        .mt-1 { margin-top: 0.5rem }
        .mt-2 { margin-top: 1rem }
        .mt-3 { margin-top: 1.5rem }

        .mb-0 { margin-bottom: 0 }
        .mb-1 { margin-bottom: 0.5rem }
        .mb-2 { margin-bottom: 1rem }
        .mb-3 { margin-bottom: 1.5rem }

        .pt-1 { padding-top: 1rem }
        li {word-wrap: break-word;}
    </style>
</div>
