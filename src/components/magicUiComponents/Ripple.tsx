import React, { useState, useEffect } from "react";

import { cn } from "../../lib/utils";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

const Ripple = React.memo(function Ripple({
  mainCircleSize = 100,
  mainCircleOpacity = 0.24,
  numCircles = 7,
  className,
}: RippleProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const adjustedMainCircleSize = isMobile
    ? mainCircleSize * 0.02
    : mainCircleSize; // Adjust the scaling factor as needed

  return (
    <div
      className={cn(
        "absolute inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = adjustedMainCircleSize + i * 60;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;

        return (
          <div
            key={i}
            className="absolute animate-ripple rounded-full bg-indigo-400 shadow-xl border"
            style={
              {
                "--i": i, // TypeScript doesn't natively recognize this, so we need to use type assertion
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
                top: "90%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
