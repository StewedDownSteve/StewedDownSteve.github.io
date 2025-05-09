// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'StewedDownSteve', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 12, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['StewedDownSteve/ruby-rails-Linktree-copy', 'StewedDownSteve/CRM-Golang', 'StewedDownSteve/Playwright-JS-web-scrape', 'StewedDownSteve/Go-html-web-scraper', 'StewedDownSteve/ProjectManagment_FS_App', 'StewedDownSteve/henry-day-out-game', 'StewedDownSteve/Cat-Book-Redone','StewedDownSteve/API_App_to_scale', 'StewedDownSteve/DnD-Monster-Finder-5e', 'StewedDownSteve/storybookscopy'] // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Client Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'BeautyMarks PDX',
          description:
            ' Website for cosmetic tattoos studio in Portland, OR. HTML, React, Node.js, 11ty, Nunjucks, SASS, JavaScript, Decap CMS, Netlify',
          imageUrl:
            'https://i.imgur.com/QGNpuDh.png',
          link: 'https://beautymarkspdx.netlify.app/',
        },
         {
          title: 'Good & Local Web Studio',
          description:
            'My personal freelance website for clients. HTML, CSS, Javascript, Sitemap, 100 on Google Page Speed',
          imageUrl:
            'https://i.imgur.com/ZAQu5GV.png',
          link: 'https://goodlocalwebstudio.com/',
        },
        {
          title: 'Dr. Khalil Marrar',
          description:
            'Professional website for Chicago-based college professor and published writer. HTML, React, Node.js, 11ty, Nunjucks, SASS, JavaScript, Decap CMS, Netlify',
          imageUrl:
            'https://i.imgur.com/C5zn75E.png',
          link: 'https://github.com/StewedDownSteve/Dr-khalil-marrar-public',
        },
        {
          title: 'Moore Coffee Co.',
          description:
            'Coffee Shop in Portland Oregon, Coffee out of a VW Bus! HTML, CSS, JavaScript. 100 on Google Page Speed',
          imageUrl:
            'https://i.imgur.com/kmKhjjT.png',
          link: 'https://moorecoffeeco.netlify.app/',
        },
        {
          title: 'Prospector Records',
          description:
            'Made for a Portland record store after they moved to a new location. HTML, CSS, JavaScript',
          imageUrl:
            'https://i.imgur.com/ZkZ9EjN.png',
          link: 'https://prospector-records.netlify.app/',
        },
        {
          title: 'Megan Ouchida, Portfolio',
          description:
            'A personal website/portfolio for a Product Manager. HTML, CSS, JavaScript',
          imageUrl:
            'https://i.imgur.com/kB2ug7X.png',
          link: 'https://meganouchida.netlify.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Steve Replogle, Software Engineer',
    description: 'Steve Replogle, Software Engineer, Web Developer, Owner of Good & Local Web Studio',
    imageURL: '',
  },
  social: {
    linkedin: 'stevereplogle1',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: 'steverepdev',
    // reddit: '',
    // threads: '',
    // youtube: '', // example: 'pewdiepie'
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    website: 'https://goodlocalwebstudio.com/',
    // phone: '',
    email: 'steverepdev@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Go',
    'TypeScript',
    'SQL',
    'React',
    'Node.js',
    'Next.js',
    '11ty',
    'Nunjucks',
    'EJS',
    'Handlebars',
    'SCSS',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'RESTful APIs',
    'GraphQL',
    'Apollo',
    'Google OAuth',
    'JSON',
    'Jest',
    'Postman',
    'Playwright',
    'Test-Driven Development (TDD)',
    'Chrome DevTools debugging',
    'Netlify',
    'Docker',
    'AWS',
    'CI/CD pipelines',
    'Git',
    'GitHub',
    'HTTPS',
    'Content Security Policies (CSP)',
    'PageSpeed Insights',
    'Google Analytics',
    'Screaming Frog',
    'Google Search Console'
  ],
  experiences: [
    {
      company: 'Good & Local Web Studio',
      position: 'Owner, Web Developer',
      from: '2023',
      to: 'Present',
      companyLink: 'https://goodlocalwebstudio.com/',
    },
    {
      company: 'AODocs, Cloud DMS Sass',
      position: 'BDR',
      from: '2022',
      to: '2023',
      companyLink: 'https://www.aodocs.com/',
    },
    {
      company: 'APSI Intl.',
      position: 'Project Manager',
      from: '2020',
      to: '2022',
      companyLink: 'https://aisi.com/',
    },
    {
      company: 'Heart Coffee Roasters',
      position: 'Training Manager',
      from: '2016',
      to: '2020',
      companyLink: 'https://www.heartroasters.com/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: '100Devs Bootcamp',
      degree: 'Full-Stack Software Engineering',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Parkland College',
      degree: 'Assosciates',
      from: '',
      to: '',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
 
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Hello I'm Steve Replogle. <a 
      class="text-primary" href="https://goodlocalwebstudio.com/"
      target="_blank"
      rel="noreferrer"
    >Freelance</a> Software Engineer | Web Developer`,

  enablePWA: true,
};

export default CONFIG;
