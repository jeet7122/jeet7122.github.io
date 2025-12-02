// src/components/experience/ExperienceTimeline.jsx

import { useEffect, useRef, useState } from "react";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceTimeline({ items }) {
  const containerRef = useRef(null);
  
  // FIX: Use useState with an initializer function to create the array of ref objects ONCE.
  // This array (itemRefs) is now treated as a stable state value, allowing access in render.
  const [itemRefs] = useState(() => 
    items.map(() => ({ current: null })) // Initialize the array of { current: null } objects
  ); 

  // We no longer need refsInitialized state.
  const [ballYPosition, setBallYPosition] = useState(0);

  // EFFECT 1: Set initial position
  // This now relies directly on the stable itemRefs state array.
  useEffect(() => {
    // Check if the array length matches (simple validation)
    if (itemRefs.length !== items.length) {
        // Handle case where items changed dynamically after first mount (optional error boundary)
        console.error("Timeline items changed after initial render. Dynamic refs may be out of sync.");
        return;
    }
    
    // Set the initial position
    if (itemRefs[0] && itemRefs[0].current && containerRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
        const firstCircleTop = itemRefs[0].current.getBoundingClientRect().top + window.scrollY;
        // The +10 adjustment is for the 20px marker circle's center (as used previously).
        setBallYPosition(firstCircleTop - containerTop + 10);
    }
    
    // Dependencies are only static refs and the itemRefs array reference itself.
  }, [itemRefs, items.length]); 

  // EFFECT 2: Scroll Logic 
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;

      // Access itemRefs (the stable state array) directly
      const itemPositions = itemRefs.map(ref => {
        // We still need to access ref.current here, but it's inside an Effect, which is fine.
        if (!ref.current) return null;
        const rect = ref.current.getBoundingClientRect();
        const centerY = (rect.top + window.scrollY) - containerTop + 10;
        return centerY;
      }).filter(pos => pos !== null);
      
      if (itemPositions.length === 0) return;

      const currentScrollY = window.scrollY;
      const timelineScrollY = currentScrollY - containerTop;

      let activeIndex = 0;
      for (let i = 0; i < itemPositions.length; i++) {
        if (i < itemPositions.length - 1) {
          const midpoint = (itemPositions[i] + itemPositions[i + 1]) / 2;
          if (timelineScrollY > midpoint) {
            activeIndex = i + 1;
          } else {
            break;
          }
        }
      }

      let newBallYPosition = itemPositions[activeIndex];

      if (activeIndex < itemPositions.length - 1) {
        const startY = itemPositions[activeIndex];
        const endY = itemPositions[activeIndex + 1];
        const progressSegment = (timelineScrollY - startY) / (endY - startY);

        if (progressSegment > 0 && progressSegment < 1) {
          newBallYPosition = startY + progressSegment * (endY - startY);
        }
      } else if (activeIndex === itemPositions.length - 1) {
        newBallYPosition = itemPositions[itemPositions.length - 1];
      }
      
      if (!isNaN(newBallYPosition)) {
          setBallYPosition(newBallYPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    // Dependency array relies on itemRefs (stable state value) and items.length for list count integrity
  }, [itemRefs, items.length]); 

  return (
    <section ref={containerRef} className="relative pl-8 space-y-8">
      {/* static line (3px wide) */}
      <div className="absolute left-0 top-0 w-[3px] bg-gray-700 h-full" />

      {/* Blue Moving Ball */}
      <div
        className="absolute -left-[6.5px] w-4 h-4 rounded-full bg-indigo-500 shadow-lg z-10" 
        style={{
          transform: `translateY(${ballYPosition - 8}px)`, 
          transition: 'transform 0.1s linear', 
        }}
      />

      {items.map((item, index) => (
        // FIX: Accessing itemRefs[index] now works because itemRefs is a stable state value (from useState),
        // not a mutable ref container's .current property.
        <ExperienceItem 
          key={item.title} 
          item={item} 
          itemRef={itemRefs[index]} 
        />
      ))}
    </section>
  );
}