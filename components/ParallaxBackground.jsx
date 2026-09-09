"use client";

import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function seededLayer(count, seed) {
  const points = [];
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = 0; i < count; i++) {
    points.push({
      left: `${rand() * 100}%`,
      top: `${rand() * 400}%`,
      size: 1 + rand() * 2.4,
      opacity: 0.25 + rand() * 0.5,
    });
  }
  return points;
}

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  const yFar = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const yNear = useTransform(scrollYProgress, [0, 1], ["0%", "62%"]);

  const far = useMemo(() => seededLayer(50, 11), []);
  const mid = useMemo(() => seededLayer(30, 47), []);
  const near = useMemo(() => seededLayer(14, 91), []);

  const layers = [
    { points: far, y: yFar, className: "bg-parchment" },
    { points: mid, y: yMid, className: "bg-gold" },
    { points: near, y: yNear, className: "bg-goldSoft" },
  ];

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      {layers.map((layer, i) => (
        <motion.div key={i} style={{ y: layer.y }} className="absolute inset-0">
          {layer.points.map((p, idx) => (
            <span
              key={idx}
              className={`absolute rounded-full ${layer.className}`}
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                opacity: p.opacity,
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}
