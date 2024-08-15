import { LEVEL } from "./constants/index.js"

export const commonInfo = {
  fullName: 'Lenko Igor',
  avatar: {
    src: './assets/images/igor.png',
    alt: 'Lenko',
    title: 'Lenko',
  },
  jobTitle: 'Front-end Developer',
  contacts: [
    {
      title: 'Phone:',
      value: '+375 29 363-5859',
      href: 'tel:+375293635859',
    },
    {
      title: 'E-mail:',
      value: 'lenkomk20085@gmail.com',
      href: 'mailto:lenkomk20085@gmail.com',
    },
    {
      title: 'LinkdIn:',
      value: 'www.linkedin.com/in/igor-lenko-4315903b',
      href: 'https://www.linkedin.com/in/igor-lenko-4315903b',
      target: '_blank',
    }
  ],
}

export const techSkills = [
  {
    title: 'Programming languages',
    skills: [
      { name: 'JavaScript (ES6)', level: LEVEL.ADVANCED },
      { name: 'TypeScript', level: LEVEL.ADVANCED },
      { name: 'HTML/CSS', level: LEVEL.ADVANCED },
      { name: 'SASS', level: LEVEL.ADVANCED },
    ]
  },
  {
    title: 'Development technologies',
    skills: [
      { name: 'React.js', level: LEVEL.ADVANCED },
      { name: 'Vue.js', level: LEVEL.BASIC },
      { name: 'Node.js', level: LEVEL.BASIC },
      { name: 'Express.js', level: LEVEL.BASIC },
      { name: 'NestJS', level: LEVEL.BASIC },
      { name: 'RestAPI', level: LEVEL.ADVANCED },
      { name: 'JSON', level: LEVEL.ADVANCED },
      { name: 'AJAX', level: LEVEL.ADVANCED },
      { name: 'Redux', level: LEVEL.ADVANCED },
      { name: 'Redux toolkit', level: LEVEL.ADVANCED },
      { name: 'Zustand', level: LEVEL.BASIC },
      { name: 'MUI', level: LEVEL.ADVANCED },
      { name: 'Bootstrap', level: LEVEL.ADVANCED },
      { name: 'Ant Design', level: LEVEL.BASIC },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: LEVEL.BASIC },
    ]
  },
  {
    title: 'IDE/Development tools',
    skills: [
      { name: 'Visual Studio Code', level: LEVEL.ADVANCED },
      { name: 'npm', level: LEVEL.ADVANCED },
      { name: 'Webpack', level: LEVEL.BASIC },
    ]
  },
  {
    title: 'Issue Tracking/VCS',
    skills: [
      { name: 'Jira', level: LEVEL.ADVANCED },
      { name: 'Gid', level: LEVEL.ADVANCED },
      { name: 'Bitbucket', level: LEVEL.ADVANCED },
      { name: 'Azure', level: LEVEL.BASIC },
    ]
  },
  {
    title: 'Development Methodologies',
    skills: [
      { name: 'Kanban', level: LEVEL.ADVANCED },
      { name: 'Scrum', level: LEVEL.ADVANCED },
    ]
  },
]

export const selfPresentation = 
  `I'm Frontend developer with experience in design and development of frontend applications using React.
  Also have experience in onboarding and teaching new coworkers on projects.
  I've worked as with big teams such  with small on different projects and today I have a good background with projects from different domains.
  There are like economic, social, medical, sports and etc. 
  Always open to new challenging tasks which require fast learning and finding the most efficient solution.
  `

export const experience = [
  {
    company: 'Softteco',
    period: 'August 2021 - till now',
    jobTitle: 'Frontend Developer',
    responsibilities: [
      'Develop and launch some projects',
      'Code-review',
      'Estimate some tasks',
      'Selection of technologies for projects',
      'Communicate with customers',
      'Communicate with team',
      'Onboard new developers on projects',
      'etc.'
    ],
  },
  {
    company: 'Freelancer',
    period: 'January 2020 - August 2021',
    jobTitle: 'Frontend Developer (HTML, CSS, JavaScript)',
    responsibilities: [
      'Support some projects',
      'Fix bugs',
      'Develop landing pages',
      'Create some extensions',
    ],
  }
]

export const languages = [
  { name: 'English', level: LEVEL.PRE_INTERMEDIATE },
  { name: 'Russian', level: LEVEL.NATIVE },
]

export const educations = [
  {
    name: 'RSSchool',
    subject: 'Frontend developer JavaScript',
    period: 'December 2020 - May 2021',
  },
  {
    name: 'IT-Academy',
    subject: 'Development web-applications on JavaScript',
    period: 'July 2020 - November 2020',
  },
  {
    name: 'IT-Academy',
    subject: 'Development web-applications on HTML,CSS и JavaScript',
    period: 'February 2020 - June 2020',
  },
]