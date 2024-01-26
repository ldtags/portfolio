import { scroller } from 'react-scroll';

export const scrollToAnchor = (anchor) => {
  return () => {
    scroller.scrollTo(anchor, {
      smooth: true,
      offset: 50,
      duration: 500
    });
  }
}