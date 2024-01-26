import './IntroParticles.scss'
import config from './config';
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function IntroParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  if (!init) {
    return <></>
  }

  return (
    <Particles
      id='tsparticles'
      particlesLoaded={particlesLoaded}
      options={config}
    />
  );
}