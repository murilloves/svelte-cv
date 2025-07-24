<script>
  const allTimeCareerJobs = [
    {
      id: 10,
      title: "Revelo - Senior Frontend Engineer @RiskScout",
      companyDesc: "Nearshore Squad Specialist",
      timelineLabel: "Jun 2022 - Jul 2025 • 3 yrs 1 mos",
      startDate: new Date("2022/01/10"),
      endDate: new Date("2022/01/10"),
      upperDesc: `
        Revelo is a US‑based platform that connects corporations with elite Latin American software engineers who understand each client’s objectives and deliver high‑quality, business‑driven software solutions.
     `,
      role: `
        As a Senior Software Engineer at Revelo, I worked for a prominent Fintech company,
        where I've contributed to the design and development of their web platform. My key achievements were:
      `,
      keyAchievements: [
        `Building a robust design system by 60+ components, including extensive forms, authoring a comprehensive style guide, and reusable React/Next.js templates that cut new UI feature development time by 35% and reduced visual inconsistencies by 25%.`,
        `Delivered personalized, intuitive admin dashboards, allowing business analysts to update content and generate detailed reports 40% faster while slashing manual reporting errors by 80%. Designed and built intuitive interfaces to enable business analysts to update content and access detailed reports easily.`,
        `Built and maintained an end-to-end testing suite using Jest and Cypress, increasing test coverage from 60% to 90% and cutting post-release bug rates by 30% overall.`,
        `Led dependency upgrades across 30+ npm packages, eliminating 15 high-severity security vulnerabilities and improving overall bundle performance by 10%, contributing to a more secure and maintainable codebase.`,
        `Developed a comprehensive style guide and a core set of reusable React components and templates to ensure consistency and scalability across the platform.`,
      ],
      tech: `Git, ReactJS, Highcharts, Typescript, Unit + E2E testing, NextJS,
        Redux, React Hooks, Context API, Zustand,
        Atomic Design, Vite, Styled Components,
        Tailwind, React Bootstrap, Ruby on Rails, GraphQL, Webpack, HTML5, SCSS, Babel.`,
    },
    {
      id: 9,
      title: "Avenue Code - Frontend Software Engineer @GAP",
      companyDesc: "",
      timelineLabel: "Jan 2022 - Jun 2022 • 6 mos",
      startDate: "",
      endDate: "",
      upperDesc: ``,
      role: ``,
      keyAchievements: [
        `Accelerated MVP delivery by 40%: Architected and launched the core back-office platform for revenue sellers from scratch, complete with user authentication, role-based access controls, and key admin modules, within 6 weeks (versus the typical 10-week timeline), enabling the operations team to onboard 150+ products and process requests twice as fast.`,
        `Boosted frontend performance by 56%: Leveraged Next.js SSR and static generation to reduce average dashboard load times from 1.6 s to 700 ms and lifted Lighthouse performance scores from 60% to 95%, resulting in a smoother UX and lower bounce rates.`,
        `Streamlined data workflows with Redux-Saga: Designed a scalable saga orchestration layer that cut redundant API calls by 30 % and dropped front-end data-update errors by 35 %, improving overall system reliability and reducing support tickets.`
      ],
      tech: `Next.js, React.js, Tailwind CSS, Redux, REST, Jest, Typescript`,
    },
    {
      id: 8,
      title: "Avenue Code - Frontend Software Engineer @BackCountry",
      companyDesc: "",
      timelineLabel: "Jul 2021 - Dec 2021 • 6 mos",
      startDate: "",
      endDate: "",
      upperDesc: ``,
      role: ``,
      keyAchievements: [
        `Built a fault-tolerant async layer with custom fetch wrappers and React Error Boundaries to strongly handle front-backend integration failures, preventing 90% of shopping-cart crashes and cutting cart abandonment by 30%.`,
        `Supercharged cart UX with Redux + localStorage caching and React-hook refactors, reducing redundant network calls by 60%, boosting cart state restoration success to 98%, eradicating useEffect deadlocks and useMemo side-effects, improving UI responsiveness by 35%, and overall webapp lighthouse score up to 93% (previously 68%).`,
        `Guaranteed 100% Jest unit & snapshot coverage, lifting CI build pass rates to 100% and slashing post-release defects by 80% through comprehensive tests across all bike-division UI modules.`
      ],
      tech: `NodeJS, GraphQL, React.js, Redux, Jest, React Hooks`,
    },
    // {
    //   id: 0,
    //   title: "",
    //   companyDesc: "",
    //   timelineLabel: "Dec 2021 - Apr 2025 •",
    //   startDate: "",
    //   endDate: "",
    //   upperDesc: ``,
    //   role: ``,
    //   keyAchievements: [],
    //   tech: ``,
    // },
  ]
    const reveloStartDate = new Date('2022/01/10');
    const reveloEndDate = new Date('2025/04/15');

    const sevenappsStartDate = new Date('2020/12/28');
    const sevenappsEndDate = new Date('2021/11/02');
    const clubienStartDate = new Date('2020/07/15');
    const clubienEndDate = new Date('2020/12/10');
    const nectarStartDate = new Date('2018/11/10');
    const nectarEndDate = new Date('2020/12/31');
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
    const reveloDiff = reveloInMonths / 12 >= 1
          ? `${Math.floor(reveloInMonths/12)} years
          ${reveloInMonths % 12 !== 0 ? ' ' + reveloInMonths % 12 + ' months' : ''}`
          : `${reveloInMonths % 12} months`

</script>

<div class="section-summary">
    <h3 class="subtitle">
        CAREER
    </h3>

    {#each allTimeCareerJobs as careerJob}
      <div class="mt-3">
        <strong class="company-name">{careerJob.title}</strong>
        <div class="tiny-desc">{careerJob.companyDesc}</div>
        <div>{careerJob.timelineLabel}</div>

        <p>
          {careerJob.upperDesc}
        </p>

        {#if careerJob.role}
          <p class="mb-1">
            <strong>
              Role:
            </strong>
          </p>
          <p class="mt-1">
            {careerJob.role}
          </p>
        {/if}

        <ul class="topic">
          {#each careerJob.keyAchievements as keyAchievement}
            {#if careerJob.role}
              <li>{keyAchievement}</li>
            {/if}
            {#if !careerJob.role}
              <p>{keyAchievement}</p>
            {/if}
          {/each}
        </ul>

        <p class="mb-1">
          <strong>
            Tech Stack:
          </strong>
        </p>
        <small>
          {careerJob.tech}
        </small>
      </div>
    {/each}

    <div class="mt-3">
        <strong class="company-name">Senior Frontend Developer @SevenApps LLC</strong>
        <div class="tiny-desc">Developer Squad Supply Specialist</div>
        <div>Aug 2020 - Jul 2021 • 1 yr</div>

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
            Key Achievements:
          </strong>
        </p>
        <ul class="topic">
          <li>Developement of the newest version of the webapp for clients from Vue to React, Next JS, and TypeScript, handling millions of simultaneous connections, improving performance by 70%, and also security.</li>
          <li>Implemented unit tests using Jest, ensuring code quality and reducing regression issues, achieving up to 95% code coverage.</li>
          <li>Implemented Design Patterns such as Singleton and Factory in Fanhero projects, improving code maintainability and scalability, reducing the implementation of new features by 30%.</li>
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
        <strong class="company-name">Frontend Developer @ Nectar CRM</strong>
        <div class="tiny-desc">Biggest CRM company in Brazilian's midwest</div>
        <div>Jun 2018 - Jul 2020 • 2 yrs</div>

        <p>
          Nectar is a regional CRM provider offering end‑to‑end customer relationship management,
          sales automation, and business‑intelligence solutions—integrated with Google, RD Station,
          and a broad ecosystem of enterprise tools—to help companies accelerate their sales processes and sharpen strategic insights.
        </p>

        <p>
          In my role, I refactored the main web app with a fresh UX/UI, developed key new features,
          and authored tailored documentation to onboard new developers.
          I also contributed to the React Native mobile app, tackled bug fixes in the core CRM platform,
          and enhanced the company’s back‑office application.
        </p>

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
        <strong class="company-name">Mobile Developer and Web Developer @ Clubien (Freelance)</strong>
        <div class="tiny-desc">Wellness Delivery startup in Ireland</div>
        <div>Jul 2020 - Dec 2020 • 6 mos</div>

        <p>
          At Clubien, a Dublin‑based startup connecting users with top beauty and grooming professionals
          for at‑home treatments, I led mobile development—owning the app’s UI/UX design and ensuring
          its performance and reliability—and, as a web developer, enhanced the website by building
          customer and professional landing pages and co‑developing the admin interface with RESTful API integration.
        </p>

        <p>Tech Stack:</p>
        <p>React Native, NextJS, React, Redux, Jest, Rest, Git, Tailwind CSS.</p>
    </div> -->

    <div class="pt-1">
        <strong class="company-name">Frontend Developer @ Actuar</strong>
        <div class="tiny-desc">Leading provider of academic software in Brazil</div>
        <div>Jan 2017 - Jun 2018 • 1 yr 6 mos</div>

        <p>
          At Actuar, a technology provider for gyms and web payments,
          I spent 18 months leading a SCRUM-based development team to build an ERP tailored for gym and CrossFit box management;
          I estimated effort for new feature requests and oversaw all software‑engineering artifacts—from requirements
          through design, implementation, and testing—and I also maintained the company’s training app,
          created responsive blogs and web pages, and optimized them for SEO.
        </p>

        <p>
            <strong>
                Tech Stack:
            </strong>
        </p>
        <small>
            Angular 2+, Ionic 2, Azure, Typescript, Jest, Angular JS, Wordpress, Scrum, HTML5, ES6, CSS3, Sass, SVG, Git.
        </small>
    </div>

    <!-- <div class="pt-1">
        <strong class="company-name">Internship Software Developer at MetaTecnologia</strong>
        <div>Feb 2017 - Jul 2017 • 6 mos</div> -->

        <!-- <p>
            MetaTecnologia is a company with large experience in computerizing mobile phone shops.
            There I worked on the improvement of a product to control financial of mobile phone stores, and payment system integration to federal government.
            I was a Fullstack developer, I studied and handled a Fullstack setup.
        </p> -->

        <!-- <p>Tech Stack:</p>
        <p> JAVA, MongoDB, JSP, HTML and CSS with Bootstrap.</p>
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
