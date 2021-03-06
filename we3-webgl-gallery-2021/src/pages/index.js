import React, { useRef, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { gsap } from 'gsap';

import dynamic from 'next/dynamic';
import styles from './index.module.scss';

import Head from '../components/Head/Head';
import { withRedux } from '../redux/withRedux';
import { setLandingLoaded } from '../redux/modules/app';

const ArtCanvas = dynamic(() => import('./ThreeCanvas.js'), {
  ssr: false
});

export const isBrowser = typeof window !== 'undefined';
function Landing() {
  const containerRef = useRef();
  const dispatch = useDispatch();
  const animateInInit = useCallback(() => {
    gsap.set(containerRef.current, { autoAlpha: 0 });
  }, []);

  const animateIn = useCallback(async () => {
    await gsap.to(containerRef.current, { duration: 0.5, autoAlpha: 1, delay: 0.3 });
    dispatch(setLandingLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    animateInInit();
  }, [animateInInit]);

  useEffect(() => {
    animateIn();
  }, [animateIn]);

  return (
    <main className={styles.Landing}>
      <Head />
      <div id="scene-container" className={styles.canvasWrap}>
        {isBrowser && <ArtCanvas></ArtCanvas>}
      </div>
    </main>
  );
}

export default withRedux(Landing);
