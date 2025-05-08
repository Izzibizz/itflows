import { useEffect, useRef, useState } from 'react';

interface Style {
  width: number;
  height: number;
  borderRadius: string;
  x: number;
  y: number;
}

interface MovingCircleProps {
  circleColors: string
}

export const MovingCircle: React.FC<MovingCircleProps> = ({ circleColors }) => {
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

      const baseSize = window.innerWidth < 768 ? 190 : window.innerWidth < 1024 ? 220 : 270;
      const wobble = Math.sin(timeRef.current) * 40; // Wobble effect
      const stretch = Math.cos(timeRef.current * 0.7) * 20; // Stretch effect

      // Ensure the wobble and stretch are within a reasonable limit
      const maxWobble = 30; // Maximum wobble effect
      const maxStretch = 20; // Maximum stretch effect
      const minSize = baseSize * 2; // Minimum size for width/height

      const width = minSize + wobble;
      const height = minSize + stretch;

      // Keep radiusX and radiusY relatively equal to maintain the circular shape
      const radiusX = 50 + Math.sin(timeRef.current * 0.9) * Math.min(wobble, maxWobble);
      const radiusY = 50 + Math.cos(timeRef.current * 0.6) * Math.min(stretch, maxStretch);

      const x = window.innerWidth / 2 - width / 2;
      const y = window.innerHeight / 2 - height / 2;

      // Create a border-radius to maintain circular shape with wobble/stretch
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
          transform: `translate(${style.x}px, ${style.y}px)`,
          width: `${style.width}px`,
          height: `${style.height}px`,
          background: `linear-gradient(135deg, ${circleColors}`,
          borderRadius: style.borderRadius,
          filter: 'blur(30px)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};
