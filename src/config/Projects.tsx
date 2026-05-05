// import Appwrite from '@/components/technologies/Appwrite';
// import Bun from '@/components/technologies/Bun';
import AI from '@/components/technologies/AI';
import Browser from '@/components/technologies/Browser';
import Cloudflare from '@/components/technologies/Cloudflare';
import CSS from '@/components/technologies/CSS';
import Docker from '@/components/technologies/Docker';
import FastAPI from '@/components/technologies/Fastapi';
import Flask from '@/components/technologies/Flask';
import Golang from '@/components/technologies/Golang';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import Npm from '@/components/technologies/Npm';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Pypi from '@/components/technologies/Pypi';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import Serverless from '@/components/technologies/Serverless';
import Spotify from '@/components/technologies/Spotify';
import TailwindCss from '@/components/technologies/TailwindCss';
import Tensorflow from '@/components/technologies/Tensorflow';
import TypeScript from '@/components/technologies/TypeScript';
import VectorDB from '@/components/technologies/Vectordb';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Scaly',
    description:
      'A production-grade scalable URL shortener built in Go with distributed system components.',
    image: '/project/scaly.png', //arbutus 
    video: '',
    link: 'https://github.com/rishabhpandey106/scaly',
    technologies: [
      { name: 'Go', icon: <Golang key="golang" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      { name: 'Serverless', icon: <Serverless key="serverless" /> },
    ],
    github: 'https://github.com/rishabhpandey106/scaly',
    live: 'https://github.com/rishabhpandey106/scaly',
    details: true,
    projectDetailsPageSlug: '/projects/scaly',
    isWorking: false,
  },
  {
    title: 'Galeech API',
    description:
      'Serverless profanity detection API powered by machine learning for real-time content moderation.',
    image: '/project/galeechapi.png',
    video: '',
    link: 'https://galeechapi.itsrishabh.tech/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Cloudflare', icon: <Cloudflare key="cloudflare" /> },
      { name: 'Serverless', icon: <Serverless key="serverless" /> },
    ],
    github: 'https://github.com/rishabhpandey106/galeech-api',
    live: 'https://galeechapi.itsrishabh.tech/',
    details: true,
    projectDetailsPageSlug: '/projects/galeech-api',
    isWorking: true,
  },
  {
    title: 'Airror',
    description:
      'A CLI-based AI code debugger that analyzes errors and provides root cause, explanation, and fix.',
    image: '/project/airror.png',
    video: '',
    link: '',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
      { name: 'AI / LLM', icon: <AI key="ai/llm" /> },
    ],
    github: 'https://github.com/rishabhpandey106/airror',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/airror',
    isWorking: true,
  },
  {
    title: 'Vector Visualizer',
    description:
      'An NLP-based interactive tool to explore word embeddings, solve analogies, and visualize vector relationships.',
    image: '/project/vectorvisualizer.png',
    video: '',
    link: 'https://vectorvisualizer.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/rishabhpandey106/vectorvisualizer',
    live: 'https://vectorvisualizer.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/vectorvisualizer',
    isWorking: true,
  },
  {
    title: 'Logspot',
    description:
      "A lightweight python package that provides a built-in log viewer with advanced features.",
    image: '/project/logspot.png',
    video: '',
    link: 'https://pypi.org/project/logspot/',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'PyPI', icon: <Pypi key="pypi" /> },
      { name: 'Flask', icon: <Flask key="flask" /> },
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
    ],
    github: 'https://github.com/rishabhpandey106/logspot',
    live: 'https://pypi.org/project/logspot/',
    details: true,
    projectDetailsPageSlug: '/projects/logspot',
    isWorking: true,
  },
  {
    title: "Logspot UI",
    description:
      'A secure frontend dashboard for LogSpot that provides an authenticated interface to view logs.',
    image: '/project/logspot.png',
    link: 'https://www.npmjs.com/package/logspot-ui',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'NPM', icon: <Npm key="npm" /> },
    ],
    github: 'https://github.com/rishabhpandey106/logspot-ui',
    live: 'https://www.npmjs.com/package/logspot-ui',
    details: true,
    projectDetailsPageSlug: '/projects/logspotui',
    isWorking: true,
  },
  {
    title: 'Ragdoll',
    description:
      'AI-powered website chat interface that enables users to interact with any website using natural language queries.',
    image: '/project/ragdoll.png',
    video: '',
    link: 'https://ragdoll-six.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Vector DB', icon: <VectorDB key="vectordb" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/rishabhpandey106/ragdoll',
    live: 'https://ragdoll-six.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/ragdoll',
    isWorking: true,
  },
  {
    title: 'Omni API',
    description:
      'A high-performance, low-latency search API designed to show ultra-fast data retrieval.',
    image: '/project/omniapi.png',
    video: '',
    link: 'https://omni-api-lac.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Cloudflare', icon: <Cloudflare key="cloudflare" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
      { name: 'Serverless', icon: <Serverless key="serverless" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
    ],
    github: 'https://github.com/rishabhpandey106/omni-api',
    live: 'https://omni-api-lac.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/omniapi',
    isWorking: true,
  },
  {
    title: "Lockbox",
    description:
      'A secure browser extension password vault.',
    image: '/project/lockbox.png',
    video: '',
    link: '',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'Browser Extension', icon: <Browser key="browser" /> },
    ],
    github: 'https://github.com/rishabhpandey106/lockbox',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/lockbox',
    isWorking: true,
  },
  {
    title: 'DinoAI',
    description:
      'AI agent that learns to play the Chrome Dino game.',
    image: '/project/dinoai.png',
    video: '',
    link: '',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Browser Extension', icon: <Browser key="browser" /> },
      { name: 'TensorFlow', icon: <Tensorflow key="tensorflow" /> },
    ],
    github: 'https://github.com/rishabhpandey106/dinoAI',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/dinoai',
    isWorking: true,
  },
  {
    title: 'Lip Lens',
    description:
      'A deep learning-based lip reading system that converts silent video input into text.',
    image: '/project/liplens.png',
    video: '',
    link: '',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'TensorFlow', icon: <Tensorflow key="tensorflow" /> },
    ],
    github: 'https://github.com/rishabhpandey106//LipLens',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/liplens',
    isWorking: true,
  },
  {
    title: 'SoulSync',
    description:
      "AI-powered Spotify playlist generator that creates personalized playlists.",
    image: '/project/soulsync.png',
    video: '',
    link: 'https://soulsync-sigma.vercel.app',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Flask', icon: <Flask key="flask" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'AI / LLM', icon: <AI key="ai" /> },
      { name: 'Spotify API', icon: <Spotify key="spotify" /> },
    ],
    github: 'https://github.com/rishabhpandey106/soulsync',
    live: 'https://soulsync-sigma.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/soulsync',
    isWorking: true,
  },
];
