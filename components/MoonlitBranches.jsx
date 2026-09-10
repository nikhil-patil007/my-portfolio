"use client";

import { motion, useScroll, useTransform } from "framer-motion";

// Hand-drawn branch clusters (not a traced photo) — a few tapering forked
// strokes per cluster, rendered as silhouettes against the moon glow.
function BranchCluster({ style }) {
  return (
    <svg
      viewBox="0 0 420 420"
      width="420"
      height="420"
      style={style}
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" strokeLinecap="round">
        <path
          d="M0 10 C 60 40, 90 70, 120 130 C 140 172, 130 210, 165 250"
          stroke="#040308"
          strokeWidth="9"
        />
        <path
          d="M120 130 C 150 140, 175 128, 205 150"
          stroke="#040308"
          strokeWidth="5"
        />
        <path
          d="M150 165 C 172 178, 178 200, 205 205"
          stroke="#040308"
          strokeWidth="4"
        />
        <path
          d="M165 250 C 178 268, 172 292, 195 315"
          stroke="#040308"
          strokeWidth="4"
        />
        <path
          d="M195 150 C 205 140, 222 138, 238 122"
          stroke="#040308"
          strokeWidth="3"
        />
        <path
          d="M0 60 C 40 78, 55 105, 92 118"
          stroke="#040308"
          strokeWidth="5"
        />
        <path
          d="M60 90 C 78 96, 88 88, 104 92"
          stroke="#040308"
          strokeWidth="2.4"
        />
        <path
          d="M20 0 C 45 22, 48 45, 78 58"
          stroke="#040308"
          strokeWidth="3.4"
        />
        <path
          d="M205 205 C 220 214, 224 232, 244 240"
          stroke="#040308"
          strokeWidth="2.4"
        />
        <path
          d="M195 315 C 210 330, 206 350, 226 366"
          stroke="#040308"
          strokeWidth="2.4"
        />
      </g>
    </svg>
  );
}

// A generic castle skyline — original shapes, not traced from any
// specific artwork — silhouetted against the horizon like a distant keep.
function CastleSkyline() {
  const towers = [
    { x: 20, w: 46, h: 70 },
    { x: 80, w: 30, h: 45 },
    { x: 130, w: 60, h: 95, spire: true },
    { x: 210, w: 34, h: 55 },
    { x: 260, w: 90, h: 60 },
    { x: 370, w: 22, h: 110, spire: true },
    { x: 410, w: 70, h: 75 },
    { x: 500, w: 40, h: 50 },
    { x: 555, w: 55, h: 90, spire: true },
    { x: 630, w: 30, h: 48 },
    { x: 675, w: 65, h: 65 },
    { x: 755, w: 25, h: 40 },
  ];
  const ground = 220;

  return (
    <svg
      viewBox="0 0 800 240"
      preserveAspectRatio="none"
      style={{ width: "100%", height: "100%" }}
    >
      <g fill="#050409">
        <rect x="0" y={ground} width="800" height="20" />
        {towers.map((t, i) => (
          <g key={i}>
            <rect x={t.x} y={ground - t.h} width={t.w} height={t.h} />
            {t.spire ? (
              <polygon
                points={`${t.x - 4},${ground - t.h} ${t.x + t.w / 2},${ground - t.h - 34} ${t.x + t.w + 4},${ground - t.h}`}
              />
            ) : (
              <polygon
                points={`${t.x - 3},${ground - t.h} ${t.x + t.w / 2},${ground - t.h - 16} ${t.x + t.w + 3},${ground - t.h}`}
              />
            )}
          </g>
        ))}
      </g>
      <g>
        {[
          [40, 190],
          [140, 165],
          [285, 185],
          [420, 175],
          [565, 170],
          [645, 195],
        ].map(([wx, wy], i) => (
          <rect
            key={i}
            x={wx}
            y={wy}
            width="4"
            height="6"
            fill="#E7C873"
            className="animate-flicker"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        ))}
      </g>
    </svg>
  );
}

export default function MoonlitBranches() {
  const { scrollYProgress } = useScroll();

  // Subtle parallax: branches move at ~0.03-0.06x scroll speed
  // Creates a floating, atmospheric effect without being dramatic
  const branchDrift = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "6%"], // ~6% movement for entire page scroll
  );

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-20 overflow-hidden">
      <img
        // src="/images/hero-background.jpg"
        src="/images/hagwots.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Dark overlay tint between image and other elements */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(11, 10, 20, 0.5)",
          zIndex: 1,
        }}
      />

      {/* warm horizon glow, like dusk light behind the keep */}
      <div
        className="absolute bottom-0 left-0 h-[45vh] w-full"
        style={{
          background:
            "linear-gradient(to top, rgba(122,46,46,0.14), rgba(59,30,94,0.1) 40%, transparent 75%)",
          zIndex: 2,
        }}
      />

      {/* moon glow, backlighting the scene like the poster */}
      <div
        className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,224,196,0.16) 0%, rgba(201,162,39,0.08) 35%, transparent 70%)",
          filter: "blur(2px)",
          zIndex: 3,
        }}
      />

      {/* drifting mist bands */}
      <div
        className="absolute inset-0 animate-drift opacity-40"
        style={{ animationDuration: "14s", zIndex: 4 }}
      >
        <div
          className="absolute left-[10%] top-[20%] h-40 w-[70%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(59,30,94,0.25), transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      <motion.div
        style={{ y: branchDrift, zIndex: 5 }}
        className="absolute -left-10 -top-10 opacity-60"
      >
        <BranchCluster style={{ opacity: 0.75 }} />
      </motion.div>

      <motion.div
        style={{ y: branchDrift, zIndex: 5 }}
        className="absolute -right-10 -top-16 opacity-60"
      >
        <BranchCluster style={{ transform: "scaleX(-1)", opacity: 0.7 }} />
      </motion.div>

      {/* soft vignette so content stays readable over the scene */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, transparent 30%, rgba(11,10,20,0.7) 75%)",
          zIndex: 6,
        }}
      />
    </div>
  );
}
