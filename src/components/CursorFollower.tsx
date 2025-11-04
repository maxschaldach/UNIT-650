import { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed rounded-full mix-blend-difference transition-all duration-200 ease-out z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '40px',
        height: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CursorFollower;
