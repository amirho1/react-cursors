import React, { useEffect, useState } from "react";

export default function useFollowCursor() {
  const [mousePosition, setMousePosition] = useState<{
    mouseX: number;
    mouseY: number;
  }>({ mouseX: -100, mouseY: -100 });

  useEffect(() => {
    window.addEventListener("mousemove", mouseEvent => {
      const mouseX = mouseEvent.clientX;
      const mouseY = mouseEvent.clientY;

      setMousePosition({
        mouseX,
        mouseY,
      });
    });

    return () => {
      window.removeEventListener("mousedown", () => {});
    };
  }, []);

  return mousePosition;
}
