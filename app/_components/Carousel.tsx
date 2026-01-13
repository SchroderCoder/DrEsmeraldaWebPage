'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react';

type CarouselProps = {
  children?: ReactNode | ReactNode[]
  gap?: number
  cardsPerPage?: number
  autoScrollSeconds?: number
};

export default function Carousel({
  children,
  gap = 0,
  cardsPerPage = 1,
  autoScrollSeconds = 0,
}: CarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () => Array.isArray(children) ? children : [children],
    [children]
  );

  const [itemWidth, setItemWidth] = useState(0);
  const [index, setIndex] = useState(0);

  // Listen for DOM mutations to calculate the width of an individual card 
  useLayoutEffect(() => {
    if (!railRef.current) return;

    const firstItem = railRef.current.children[0] as HTMLElement | undefined;
    if (!firstItem) return;

    const measure = () => {
      setItemWidth(firstItem.offsetWidth);
    };

    measure();

    // Bind ResizeObserver to the first item to measure on layout changes
    const observer = new ResizeObserver(measure);
    observer.observe(firstItem);

    return () => observer.disconnect();
  }, [items]);

  // Max index allowed to scroll to
  const maxIndex = Math.max(items.length - cardsPerPage, 0);

  // Handle items decreasing in size bellow the current index
  useLayoutEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // Auto scroll on an interval
  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    
    if (autoScrollSeconds > 0) {
      interval = setInterval(() => {
        setIndex((i) => (i + 1) % (maxIndex + 1));
      }, autoScrollSeconds * 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    }
  }, [maxIndex, autoScrollSeconds])

  const pageCount = maxIndex + 1;

  const translateX = index * (itemWidth + gap);

  const viewportWidth = cardsPerPage * itemWidth + gap * Math.max(cardsPerPage - 1, 0);

  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <div
          ref={viewportRef}
          style={{
            width: viewportWidth,
            overflow: 'hidden',
          }}
        >
          <div
            ref={railRef}
            style={{
              display: 'flex',
              gap: gap,
              transform: `translateX(-${translateX}px)`,
              transition: 'transform 0.5s ease-out',
            }}
          >
            {children}
          </div>
        </div>
      </div>
      <div className='mt-5 gap-1 flex justify-center'>
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
          className='p-2 bg-blue-300 rounded-full'
            key={i}
            onClick={() => setIndex(i)}
            style={{
              transform: i === index ? 'scale(1.2)' : 'scale(1)',
              transition: 'transform 0.2s',
              backgroundColor: i === index ? 'oklch(70.7% 0.165 254.624)' : ' oklch(80.9% 0.105 251.813)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
