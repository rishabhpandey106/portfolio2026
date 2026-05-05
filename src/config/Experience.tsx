import AI from '@/components/technologies/AI';
import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Flask from '@/components/technologies/Flask';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Pinecone from '@/components/technologies/Pinecone';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: true,
    company: 'psychhhh',
    position: 'Software Engineer II',
    location: 'India',
    image: '/company/promote.png',
    description: [
      'Yet to be updated.',
    ],
    startDate: 'August 2026',
    endDate: 'Present',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'AI',
        href: 'https://openai.com/',
        icon: <AI />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
    ],
    website: '#',
    github: '#',
    x: '#',
  },
  {
    isCurrent: false,
    company: 'Rivigo',
    position: 'Software Developer Intern',
    location: 'Gurugram, India (On-Site)',
    image: '/company/rivigo.png',
    description: [
      'Developed an end-to-end system to automate consignment creation via a chat interface using Python, Gen AI and Flask.',
      'Built a responsive frontend with Next.js, ensuring a seamless user experience across devices.',
      'Modularized the codebase with reusable components and integrated logging for enhanced debugging and maintainability.',
      'Collaborated with the DevOps team to containerize the application using Docker, deploy to Kubernetes, and implement Jenkins for CI / CD pipelines.'
    ],
    startDate: 'July 2025',
    endDate: 'Jan 2026',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'Pinecone',
        href: 'https://www.pinecone.io/',
        icon: <Pinecone />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Flask',
        href: 'https://flask.palletsprojects.com/',
        icon: <Flask />,
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        icon: <Docker />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'AI',
        href: 'https://openai.com/',
        icon: <AI />,
      },
    ],
    website: 'https://zoom.rivigo.com',
    github: '#',
    x: 'https://x.com/Mahindralog_MLL',
    linkedin: 'https://www.linkedin.com/company/rivigo/',
  },
  {
    isCurrent: false,
    company: 'CodeQuotient',
    position: 'SuperCoder Intern',
    location: 'Chandigarh, India (Remote)',
    image: '/company/cq.png',
    description: [
      'Developed and enhanced backend functionalities to ensure seamless project delivery.',
      'Enabled efficient data handling and real-time features, enhancing the overall performance of the system.',
    ],
    startDate: 'July 2023',
    endDate: 'September 2023',
    technologies: [
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Prisma',
        href: 'https://prisma.io/',
        icon: <Prisma />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Postman',
        href: 'https://postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
    website: 'https://codequotient.com/',
    github: 'https://github.com/codequotient',
    x: 'https://x.com/CodeQuotient',
    linkedin: 'https://www.linkedin.com/company/codequotient',
  },
];
