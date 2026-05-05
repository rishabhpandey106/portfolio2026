import Calender from '@/components/svgs/Calender';
import { CertificateIcon, EggCrackIcon } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

export type JourneyItem = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

export const journeyItems: JourneyItem[] = [
  {
    name: 'My Goals',
    description: 'My Top 30 Goals Before 30',
    icon: Calender,
    href: '/goals',
  },
  {
    name: 'Certificates & Achievements',
    description: 'A curated list of certificates and achievements.',
    icon: CertificateIcon,
    href: '/certificates',
  },
  {
    name: 'Timeline',
    description: 'A detailed timeline of my personal and professional milestones.',
    icon: EggCrackIcon,
    href: '/timeline',
  }
];

const journeyConfig = {
  journeyItems,
};

export default journeyConfig;
