import { alertbird, bc, bonnygames } from "@/public/assets/images";
import {
  book,
  calculator,
  cart,
  contact,
  css,
  estate,
  express,
  docker,
  flask,
  git,
  github,
  graphql,
  html,
  javascript,
  key,
  laravel,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nike,
  nodejs,
  note,
  nuxt,
  postgres,
  react,
  redux,
  rust,
  sanity,
  sass,
  selenium,
  symfony,
  tailwindcss,
  threads,
  typescript,
  vue,
} from "@/public/assets/icons";

export const skills = [
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: selenium,
    name: "Selenium",
    type: "Web Scraping",
  },
  {
    imageUrl: postgres,
    name: "Postgres",
    type: "Database",
  },
  {
    imageUrl: laravel,
    name: "Laravel",
    type: "Backend",
  },
  {
    imageUrl: flask,
    name: "Flask",
    type: "Backend",
  },
  {
    imageUrl: rust,
    name: "Rust",
    type: "General purpose"
  },
  {
    imageUrl: symfony,
    name: "Symfony",
    type: "Backend"
  },
  {
    imageUrl: sanity,
    name: "Sanity",
    type: "CMS"
  },
  {
    imageUrl: graphql,
    name: "GraphQL",
    type: "API"
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Containerization"
  }
];

// OTHER POSSIBLE COLORS
// 1. Light Beige / Tan: #F5D0A9
// 2. Soft Mint Green: #B4F8C8
// 3. Light Peach: #FFBCB3
// 4. Soft Coral: #F4A8A1


export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Bonny Games",
    icon: bonnygames,
    iconBg: "#E1C6FF",
    date: "June 2021 - November 2022",
    points: [
      "Built and maintained frontend systems using React.",
      "Ensured cross-browser compatibility and adherence to modern web standards.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Better Collective",
    icon: bc,
    iconBg: "#DCDCDC",
    date: "November 2022 - May 2023",
    points: [
      "Developed and maintained web applications using Symfony, Postgres, React.js and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "AlertBird",
    icon: alertbird,
    iconBg: "#A2D2FF",
    date: "May 2023 - March 2025",
    points: [
      "Developed and maintained web applications using Nuxt.js, Sanity and other related technologies.",
      "Worked in an automated CI/CD and containerized environment on Azure DevOps and Google Cloud.",
      "Implemented responsive design and ensured cross-browser compatibility and adherence to modern web standards.",
      "Contributed to improving team workflows through code reviews and knowledge sharing.",
    ],
  },
];

export const projects = [
  {
    iconUrl: nike,
    theme: 'btn-back-red',
    name: 'Next Sanity Nike',
    description: 'Sports wear app built with Next.js, Three.js, TypeScript, Tailwind, MongoDB, NextAuth, Prisma, Zustand, Frame Motion and Sanity.',
    link: 'https://github.com/dragan717080/NextTypeScriptTailwindPrismaNextAuthSanityNike',
  },
  {
    iconUrl: key,
    theme: 'btn-back-yellow',
    name: 'Rust Cryptography',
    description: 'Collection of cryptography examples in Rust such as RSA, DH, Vigenere and various primality tests.',
    link: 'https://github.com/dragan717080/CryptographyPrograms',
  },
  {
    iconUrl: book,
    theme: 'btn-back-blue',
    name: 'Book App',
    description: 'Book app built in Laravel, Vue, Nuxt, Tailwind and MySQL.',
    link: 'https://github.com/dragan717080/LaravelVueNuxtTailwindMySQLBooksApp',
  },
  /*   {
      iconUrl: cart,
      theme: 'btn-back-pink',
      name: 'Groceries App',
      description: 'Groceries app built in Next.js, TypeScript, Tailwind and NextAuth.',
      link: 'https://github.com/dragan717080/Groceries',
    }, */
  {
    iconUrl: calculator,
    theme: 'btn-back-pink',
    name: 'Matrix Calculator',
    description: 'Matrix Calculator app built with React, TypeScript, Tailwind, Headless UI and Vite.',
    link: 'https://github.com/dragan717080/MatrixCalculator',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Rust Implementation Algorithms',
    description: 'Collection of implementation algorithm tasks from HackerRank written in Rust.',
    link: 'https://github.com/dragan717080/ImplementationAlgorithms',
  },
  {
    iconUrl: note,
    theme: 'btn-back-yellow',
    name: 'Virtual Piano',
    description: 'Virtual Piano app built using Flask, SQLAlchemy, SCSS and Jinja2.',
    link: 'https://github.com/dragan717080/VirtualPiano',
  }
];
