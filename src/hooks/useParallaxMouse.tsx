import { useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const useParallaxMouse = (scale = 1) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      x.set(clientX);
      y.set(clientY);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [x, y]);

  const xMove = useTransform(
    x,
    [0, typeof window !== "undefined" ? window.innerWidth : 0],
    [scale, -scale]
  );
  const yMove = useTransform(
    y,
    [0, typeof window !== "undefined" ? window.innerHeight : 0],
    [scale, -scale]
  );
  return { xMove, yMove };
};

export default useParallaxMouse;
