import { bc, alertbird } from "@/public/assets/images";
import {
  book,
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

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Better Collective",
    icon: bc,
    iconBg: "#DCDCDC",
    date: "November 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using Symfony, Postgres, React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "AlertBird",
    icon: alertbird,
    iconBg: "#a2d2ff",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using Nuxt, Sanity and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const projects = [
  {
    iconUrl: nike,
    theme: 'btn-back-red',
    name: 'Next Sanity Nike',
    description: 'Sports wear app built with Next.js, TypeScript, Tailwind, MongoDB, NextAuth, Prisma, Zustand and Sanity.',
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
  {
    iconUrl: cart,
    theme: 'btn-back-pink',
    name: 'Groceries App',
    description: 'Groceries app built in Next.js, TypeScript, Tailwind and NextAuth.',
    link: 'https://github.com/dragan717080/Groceries',
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
