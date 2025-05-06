import { useEffect, useRef, useState } from 'react';

interface Style {
  width: number;
  height: number;
  borderRadius: string;
  x: number;
  y: number;
}

export const MovingCircle: React.FC = () => {
  const [style, setStyle] = useState<Style>({
    width: 400,
    height: 400,
    borderRadius: '50%',
    x: 0,
    y: 0,
  });

  const timeRef = useRef(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      timeRef.current += 0.005;

      const baseSize = 150;
      const wobble = Math.sin(timeRef.current) * 30;
      const stretch = Math.cos(timeRef.current * 0.7) * 20;

      const width = baseSize * 2 + wobble;
      const height = baseSize * 2 + stretch;

      const radiusX = 50 + Math.sin(timeRef.current * 0.9) * 30;
      const radiusY = 50 + Math.cos(timeRef.current * 0.6) * 30;

      const x = window.innerWidth / 2 - width / 2;
      const y = window.innerHeight / 2 - height / 2;

      const borderRadius = `${radiusX}% ${100 - radiusX}% ${radiusY}% ${100 - radiusY}% / ${radiusY}% ${radiusX}% ${100 - radiusY}% ${100 - radiusX}%`;

      setStyle({ width, height, borderRadius, x, y });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="z-0 w-full h-full top-0 absolute left-0 overflow-hidden">
      <div
        className="absolute"
        style={{
          left: `${style.x}px`,
          top: `${style.y}px`,
          width: `${style.width}px`,
          height: `${style.height}px`,
          background: 'linear-gradient(135deg, #FBB182, #6588B8)',
          borderRadius: style.borderRadius,
          filter: 'blur(50px)',
        }}
      />
    </div>
  );
};