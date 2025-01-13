import { EDUCATIONS, EXPERIENCES, LEVEL, TITLES, USER } from "./constants/index.js"

export const commonInfo = (lg) => ({
  fullName: `${USER[lg].FIRST_NAME} ${USER[lg].LAST_NAME}`,
  avatar: {
    src: './assets/images/igor.png',
    alt: USER[lg].LAST_NAME,
    title: USER[lg].LAST_NAME,
  },
  jobTitle: 'Front-end Developer',
  contacts: [
    {
      title: `${TITLES[lg].PHONE}:`,
      value: '+375 29 363-5859',
      href: 'tel:+375293635859',
    },
    {
      title: `${TITLES[lg].EMAIL}:`,
      value: 'lenkomk20085@gmail.com',
      href: 'mailto:lenkomk20085@gmail.com',
    },
    {
      title: `${TITLES[lg].LINKDIN}:`,
      value: 'www.linkedin.com/in/igor-lenko-4315903b',
      href: 'https://www.linkedin.com/in/igor-lenko-4315903b',
      target: '_blank',
    }
  ],
})

export const techSkills = (lg) => ([
  {
    title: TITLES[lg].PROGRAMMING_LANGUAGES,
    skills: [
      { name: 'JavaScript (ES6)', level: LEVEL[lg].ADVANCED },
      { name: 'TypeScript', level: LEVEL[lg].ADVANCED },
      { name: 'HTML/CSS', level: LEVEL[lg].ADVANCED },
      { name: 'SASS', level: LEVEL[lg].ADVANCED },
    ]
  },
  {
    title: TITLES[lg].DEV_TECHNOLOGIES,
    skills: [
      { name: 'React.js', level: LEVEL[lg].ADVANCED },
      { name: 'Vue.js', level: LEVEL[lg].BASIC },
      { name: 'Node.js', level: LEVEL[lg].BASIC },
      { name: 'Express.js', level: LEVEL[lg].BASIC },
      { name: 'NestJS', level: LEVEL[lg].BASIC },
      { name: 'RestAPI', level: LEVEL[lg].ADVANCED },
      { name: 'JSON', level: LEVEL[lg].ADVANCED },
      { name: 'AJAX', level: LEVEL[lg].ADVANCED },
      { name: 'Redux', level: LEVEL[lg].ADVANCED },
      { name: 'Redux toolkit', level: LEVEL[lg].ADVANCED },
      { name: 'Zustand', level: LEVEL[lg].BASIC },
      { name: 'MUI', level: LEVEL[lg].ADVANCED },
      { name: 'Bootstrap', level: LEVEL[lg].ADVANCED },
      { name: 'Ant Design', level: LEVEL[lg].BASIC },
    ]
  },
  {
    title: TITLES[lg].DATABASES,
    skills: [
      { name: 'PostgreSQL', level: LEVEL[lg].BASIC },
    ]
  },
  {
    title: TITLES[lg].IDE,
    skills: [
      { name: 'Visual Studio Code', level: LEVEL[lg].ADVANCED },
      { name: 'npm', level: LEVEL[lg].ADVANCED },
      { name: 'Webpack', level: LEVEL[lg].BASIC },
    ]
  },
  {
    title: TITLES[lg].VCS,
    skills: [
      { name: 'Jira', level: LEVEL[lg].ADVANCED },
      { name: 'Gid', level: LEVEL[lg].ADVANCED },
      { name: 'Bitbucket', level: LEVEL[lg].ADVANCED },
      { name: 'Azure', level: LEVEL[lg].BASIC },
    ]
  },
  {
    title: TITLES[lg].DEV_METHODOLOGIES,
    skills: [
      { name: 'Kanban', level: LEVEL[lg].ADVANCED },
      { name: 'Scrum', level: LEVEL[lg].ADVANCED },
    ]
  },
])

export const selfPresentation = (lg) => USER[lg].SELF_PRESENTATION

export const experience = (lg) => ([
  {
    company: 'Softteco',
    period: EXPERIENCES[lg].SOFTTECO.period,
    jobTitle: EXPERIENCES[lg].SOFTTECO.jobTitle,
    responsibilities: EXPERIENCES[lg].SOFTTECO.responsibilities,
  },
  {
    company: 'Freelancer',
    period: EXPERIENCES[lg].FREELANCER.period,
    jobTitle: EXPERIENCES[lg].FREELANCER.jobTitle,
    responsibilities: EXPERIENCES[lg].FREELANCER.responsibilities,
  }
])

export const languages = (lg) => ([
  { name: 'English', level: LEVEL[lg].INTERMEDIATE },
  { name: 'Russian', level: LEVEL[lg].NATIVE },
])

export const educations = (lg) => ([
  {
    name: 'RSSchool',
    subject: EDUCATIONS[lg][0].subject,
    period: EDUCATIONS[lg][0].period,
  },
  {
    name: 'IT-Academy',
    subject: EDUCATIONS[lg][1].subject,
    period: EDUCATIONS[lg][1].period,
  },
  {
    name: 'IT-Academy',
    subject: EDUCATIONS[lg][2].subject,
    period: EDUCATIONS[lg][2].period,
  },
])