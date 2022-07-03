import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Nav from '../components/nav';

const Home: NextPage = () => {

  const [dotColor, setDotColor] = useState<string>();

  const colors = [
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#10b981",
    "#14b8a6",
    "#06b6d4",
    "#0ea5e9",
    "#3b82f6",
    "#6366f1",
    "#8b5cf6",
    "#a855f7",
    "#d946ef",
    "#ec4899",
    "#f43f5e",
  ];

  let lastColor: string | undefined = undefined;
  const newColor = () => {
    const getColor = () => colors[Math.floor(Math.random() * colors.length)];

    let nextColor = undefined;
    do {
      nextColor = getColor();
    } while (nextColor == lastColor);

    setDotColor(nextColor);
    lastColor = nextColor;
  };

  useEffect(() => {
    document.body.addEventListener("touchend", newColor);

    window.addEventListener("keypress", (ev) => {
      if (ev.code === "Space") newColor();
    });

    newColor();
  }, []);

  return (
    <div
      className="w-min mx-auto md:mb-8 p-6 flex flex-col justify-center items-center"
    >
      <h1
        className="text-5xl md:text-8xl mb-8 md:mb-12 lg:text-8xl font-bold cursor-pointer select-none opacity-0 animate-fly-in animation-delay-100"
        id="name"
        onClick={newColor}
      >
        scybernaut<span
          className="ease-out duration-150 transition-colors"
          style={{ color: dotColor }}
        >.</span>
      </h1>
      <Nav className="opacity-0 animate-fly-in animation-delay-300" />
    </div>
  );
};
export default Home;