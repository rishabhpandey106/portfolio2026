/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components
import Golang from '@/components/technologies/Golang';
import Python from '@/components/technologies/Python';
import TypeScript from '@/components/technologies/TypeScript';
import Leetcode from '@/components/svgs/Leetcode';
import Youtube from '@/components/svgs/Youtube';
import Medium from '@/components/svgs/Medium';
import Instagram from '@/components/svgs/Instagram';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  Python: Python,
  Golang: Golang,
};

export const heroConfig = {
  // Personal Information
  name: 'Rishabh',
  title: 'A Full Stack web developer.',
  avatar: '/assets/piclogo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'Golang',
      href: 'https://golang.org/',
      component: 'Golang',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build interactive web apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. With a focus on <b>AI</b>, as part of building better applications.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/18Rishabh',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rishabh-kumar-pandey-954b1a201/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/rishabhpandey106',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:rishabhpandey230@gmail.com',
    icon: <Mail />,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/uncle_salmon/',
    icon: <Leetcode />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@rishabhpandey106',
    icon: <Youtube />,
  },
  {
    name: 'Medium',
    href: 'https://rishabhpandey106.medium.com/',
    icon: <Medium />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/rishabhpandey___/',
    icon: <Instagram />,
  }
];
