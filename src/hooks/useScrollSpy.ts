/**
 * @file useScrollSpy.ts
 * @description A custom React hook to track which section is currently in the viewport.
 */

import { useState, useEffect, useRef } from 'react';

/**
 * @hook useScrollSpy
 * @description Monitors scroll position to determine the active section based on provided section IDs.
 * @param {string[]} sectionIds - An array of IDs for the sections to track.
 * @param {number} [offset=0] - An offset from the top of the viewport to trigger the active state.
 * @returns {string} The ID of the currently active section.
 */
export const useScrollSpy = (sectionIds: string[], offset: number = 0): string => {
  const [activeSection, setActiveSection] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect previous observer if it exists
    if (observer.current) {
      observer.current.disconnect();
    }

    // Create a new IntersectionObserver
    observer.current = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio (most visible section)
          const mostVisible = visibleEntries.reduce((prev, current) => 
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          setActiveSection(mostVisible.target.id);
        }
      },
      { 
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    const { current: currentObserver } = observer;

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    // Cleanup function to disconnect the observer
    return () => currentObserver.disconnect();
  }, [sectionIds, offset]);

  return activeSection;
};