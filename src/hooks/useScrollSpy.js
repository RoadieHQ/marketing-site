import { useState, useEffect } from 'react';
import throttle from 'lodash/fp/throttle';

/*
 * This code is copied from the MIT licensed https://github.com/Purii/react-use-scrollspy 
 *
 * There are two main modifications made:
 *
 *  1. Use HTML elements instead of React refs. The elements we need to spy on are rendered from
 *     markdown and thus we can't add React refs to them.
 *  2. Fetch the sectionElements inside useEffect. This fixes a bug where the
 *     handler would run before the elements were available on the page on first load.
 *
 */

const useScrollSpy = ({
  activeSectionDefault = 0,
  offsetPx = 0,
  headings,
  throttleMs = 100,
}) => {
  const [activeSection, setActiveSection] = useState(activeSectionDefault);

  const handle = throttle(throttleMs, (sectionElements) => {

    let currentSectionId = activeSection;
    for (let i = 0; i < sectionElements.length; i++) {
      const section = sectionElements[i];
      // Needs to be a valid DOM Element
      if (!section || !(section instanceof Element)) continue;
      // GetBoundingClientRect returns values relative to viewport
      if (section.getBoundingClientRect().top + offsetPx < 0) {
        currentSectionId = i;
        continue;
      }
      // No need to continue loop, if last element has been detected
      break;
    }

    setActiveSection(currentSectionId);
  });

  useEffect(() => {
    const sectionElements = headings.map(({ id }) => document.querySelector(`#${id}`));
    const listener = () => handle(sectionElements);
    window.addEventListener('scroll', listener);

    handle(sectionElements);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [headings, offsetPx]);
  return activeSection;
};

export default useScrollSpy;
