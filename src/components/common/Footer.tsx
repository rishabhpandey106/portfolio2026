import { footerConfig } from '@/config/Footer';
import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import Container from './Container';

export default function Footer() {
  return (
    // credits tooltip
    <Container className="py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary text-center text-sm">
          {footerConfig.text}
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <b className='pl-1'>{footerConfig.developer}</b>
            </TooltipTrigger>
            <TooltipContent>
              <b>{footerConfig.tooltip}</b>
            </TooltipContent>
          </Tooltip> <br /> &copy;{' '}
          {new Date().getFullYear()}. {footerConfig.copyright}
        </p>
      </div>
    </Container>
  );
}
