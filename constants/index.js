export const LANGUAGE = {
    EN: 'en',
    RU: 'ru',
}

export const LEVEL = {
    [LANGUAGE.EN]: {
        BASIC: 'Basic',
        PRE_INTERMEDIATE: 'Pre-Intermediate (A2)',
        INTERMEDIATE: 'Intermediate (B1)',
        ADVANCED: 'Advanced',
        EXPERT: 'Expert',
        NATIVE: 'Native',
    },
    [LANGUAGE.RU]: {
        BASIC: 'Базовый',
        PRE_INTERMEDIATE: 'Предпрофессиональный (A2)',
        INTERMEDIATE: 'Профессиональный (B1)',
        ADVANCED: 'Высокий',
        EXPERT: 'Эксперт',
        NATIVE: 'Родной',
    },
}

export const BLOCK_TITLES = {
    [LANGUAGE.EN]: {
        CONTACTS: 'Contacts',
        TECH_SKILLS: 'Technical skills',
        ABOUT_MYSELF: 'Self presentation',
        EXPERIENCE: 'Experience',
        EDUCATION: 'Education',
        LANGUAGES: 'Languages',
    },
    [LANGUAGE.RU]: {
        CONTACTS: 'Контакты',
        TECH_SKILLS: 'Технические навыки',
        ABOUT_MYSELF: 'Обо мне',
        EXPERIENCE: 'Опыт работы',
        EDUCATION: 'Образование',
        LANGUAGES: 'Языки',
    },
}

export const TITLES = {
    [LANGUAGE.EN]: {
        PHONE: 'Phone',
        EMAIL: 'E-mail',
        LINKEDIN: 'LinkedIn',
        TELEGRAM: 'Telegram',
        PROGRAMMING_LANGUAGES: 'Programming languages:',
        DEV_TECHNOLOGIES: 'Development technologies',
        DATABASES: 'Databases',
        IDE: 'IDE/Development tools',
        VCS: 'Issue Tracking/VCS',
        DEV_METHODOLOGIES: 'Development methodologies',

    },
    [LANGUAGE.RU]: {
        PHONE: 'Телефон',
        EMAIL: 'Эл.почта',
        LINKEDIN: 'LinkedIn',
        TELEGRAM: 'Telegram',
        PROGRAMMING_LANGUAGES: 'Языки программирования:',
        DEV_TECHNOLOGIES: 'Технологии разработки',
        DATABASES: 'Базы данных',
        IDE: 'IDE/Инструменты разработки',
        VCS: 'Системы управления версиями/VCS',
        DEV_METHODOLOGIES: 'Методологии разработки',
    },
}

export const USER = {
    [LANGUAGE.EN]: {
        FIRST_NAME: 'Igor',
        LAST_NAME: 'Lenko',
        SELF_PRESENTATION: `I'm Frontend developer with experience in design and development of frontend applications using React.
                            Also have experience in onboarding and teaching new coworkers on projects.
                            I've worked as with big teams such  with small on different projects and today I have a good background with projects from different domains.
                            There are like economic, social, medical, sports. 
                            Always open to new challenging tasks which require fast learning and finding the most efficient solution.
                            `
    },
    [LANGUAGE.RU]: {
        FIRST_NAME: 'Игорь',
        LAST_NAME: 'Ленько',
        SELF_PRESENTATION: `Я React фронтенд разработчик с опытом проектирования фронтенд-приложений.
                            Работал над проектами из разных сфер деятельности такие как, экономика, социальная сфера, медицина, спорт.
                            Есть опыт в адаптации и обучении новых коллег на проектах.
                            Всегда открыт для новых сложных задач, требующих быстрого обучения и поиска наиболее эффективного решения.
                            `  
    }
}

export const EXPERIENCES = {
    [LANGUAGE.EN]: {
        UNiDEV: {
            period: 'February 2025 - till now',
            jobTitle: 'Frontend Developer (React.js)',
            responsibilities: [
                'Development of a web application for personnel management',
                'Participation in sprint planning',
                'Decomposition and assessment of tasks',
                'Development of application modules',
                'Teamwork',
            ],
            achievementTitle: 'Achievements',
            achievements: [
                `- Within a week I understood the technical nuances of the project and started developing it.`,
                `- Took responsibility for developing part of the application. Result: two-week sprints.`,
                `- Insisted on decomposition and joint discussion of large tasks. Result: the number of bugs decreased by 50%`,
            ],
        },
        SOFTTECO: {
            period: 'August 2021 - February 2025',
            jobTitle: 'Frontend Developer',
            responsibilities: [
                'Develop and launch some projects',
                'Code-review',
                'Estimate some tasks',
                'Selection of technologies for projects',
                'Communicate with customers',
                'Communicate with team',
                'Onboard new developers on projects',
            ],
            achievementTitle: 'Achievements',
            achievements: [
                `- In a web application for digitizing fire safety documentation,
                implemented functionality for placing equipment icons on design drawings
                of buildings using Drag and drop - as a result, gratitude from the customer and positive
                feedback from users`,
                `- Medical application - implemented online chat using web sockets and this contributed 
                to the successful presentation of the application from the customer to the investor`,
                `- Application for holding dav competitions - reasonably proposed and implemented
into the work   of mock-data when working with the backend. Result: development time was reduced by 30%`,
            ],
        },
        FREELANCER: {
            period: 'January 2020 - August 2021',
            jobTitle: 'Frontend Developer (HTML, CSS, JavaScript)',
            responsibilities: [
                'Support some projects',
                'Fix bugs',
                'Develop landing pages',
                'Create some extensions',
            ],
            achievements: [],
        },
    },
    [LANGUAGE.RU]: {
        UNiDEV: {
            period: 'Февраль 2025 - по настоящее время',
            jobTitle: 'Frontend разработчик (React.js)',
            responsibilities: [
                'Разработка web-приложения для управления персоналом',
                'Участие в sprint planning',
                'Декомпозиция и оценка задач',
                'Разработка модулей приложения',
                'Работа в команде',
            ],
            achievementTitle: 'Достижения',
            achievements: [
                `- В недельный срок вникнул в технические нюансы проекта и приступил к полноценной разработке`,
                `- Взял на себя ответственность за разработку части приложения. Результат: двух недельные спринты`,
                `- Настоял на декомпозиции и совместных обсуждения больших по объему задач. Результат: количество багов сократилось на 50%`,
            ],
        },
        SOFTTECO: {
            period: 'Август 2021 - Февраль 2025',
            jobTitle: 'Frontend разработчик',
            responsibilities: [
                'Разработка web-приложений',
                'Ревью кода',
                'Оценка задач',
                'Построение архитектуры проекта и подбор требуемых технологий',
                'Комуникация с заказчиками',
                'Работа в команде',
                'Обучение и поддержка молодых разработчиков для проекта',
            ],
            achievementTitle: 'Достижения',
            achievements: [
                `- В web-приложении для оцифровки документации по противопожарной безопасности, 
                реализовал функцинал по растановке иконок оборудования на проектных чертежах 
                зданий по средствам Drag and drop. Результат: благодарность от заказчика и положительный 
                отзыв от пользователей`,
                `- Медицинское приложение - внедрил онлайн чат с использованием web-сокетов и это 
                поспособствовало успешной презентации приложения от заказчика инвестору`,
                `- Приложение для проведения соревнований по давингу - обоснованно предложил и внедрил 
                в работу mock-data при работе с бэкендом. Результат: сократилось время разработки на 30%`,
            ],
        },
        FREELANCER: {
            period: 'Январь 2020 - Август 2021',
            jobTitle: 'Frontend разработчик (HTML, CSS, JavaScript)',
            responsibilities: [
                'Разработка web-приложений',
                'Исправление багов',
                'Разработка лендингов',
                'Разработка расширений',    
            ],
            achievements: [],
        },
    }
}

export const EDUCATIONS = {
    [LANGUAGE.EN]: {
        0: {
            name: 'RSSchool',    
            subject: 'Frontend developer JavaScript',
            period: 'December 2020 - May 2021',
        },
        1: {
            name: 'IT-Academy',
            subject: 'Development web-applications on JavaScript',
            period: 'July 2020 - November 2020',
        },
        2: {
            name: 'IT-Academy',
            subject: 'Development web-applications on HTML,CSS and JavaScript',
            period: 'February 2020 - June 2020',
        },
    },
    [LANGUAGE.RU]: {
        0: {
            name: 'RSSchool',    
            subject: 'Frontend разработчик JavaScript',
            period: 'Декабрь 2020 - Май 2021',
        },
        1: {
            name: 'IT-Academy',
            subject: 'Разработка веб-приложений на JavaScript',
            period: 'Июль 2020 - Ноябрь 2020',
        },
        2: {
            name: 'IT-Academy',
            subject: 'Разработка веб-приложений на HTML,CSS и JavaScript',
            period: 'Февраль 2020 - Июнь 2020',
        },
    }
}