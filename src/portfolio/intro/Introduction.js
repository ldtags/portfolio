import { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Events } from 'react-scroll';

import './Introduction.scss';
import IntroParticles from './IntroParticles';
import IntroBody from './IntroBody'


export default function Introduction() {
  return (
    <div className='introduction' id='home'>
      <IntroParticles />
      <Parallax className='parallax-body' translateY={[-50, 50]} children={(<IntroBody />)} />
      <Parallax className='overlay' scale={[.6, 1.4]} />
      <div className='bottom-cover' />
  </div>
  );
}