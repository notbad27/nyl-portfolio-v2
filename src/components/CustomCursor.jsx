import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-cyan-400 pointer-events-none mix-blend-difference z-50"
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
    />
  );
}
