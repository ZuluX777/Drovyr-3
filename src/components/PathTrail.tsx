type PathTrailProps = {
  className?: string;
};

/**
 * Original abstract "path forward" graphic — a winding line with a glowing
 * gradient stroke, echoing the directional-slash brand motif without reusing
 * any of the lookbook's photographic imagery. Decorative only.
 */
export default function PathTrail({ className = "" }: PathTrailProps) {
  return (
    <svg
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="trailGradient" x1="0" y1="700" x2="1200" y2="0">
          <stop offset="0%" stopColor="#2563FF" stopOpacity="0" />
          <stop offset="35%" stopColor="#2563FF" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#7DD3FC" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="glowSpot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2563FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="760" cy="230" r="220" fill="url(#glowSpot)" />

      {/* Faint grid to suggest structure/operations without literal iconography */}
      <g stroke="#1E2A45" strokeWidth="1" opacity="0.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" x2="1200" y1={i * 140} y2={i * 140} />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v-${i}`} y1="0" y2="700" x1={i * 150} x2={i * 150} />
        ))}
      </g>

      <path
        d="M -50 650 C 200 620, 320 500, 420 430 C 560 330, 640 260, 780 210 C 920 160, 1000 120, 1250 40"
        stroke="url(#trailGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength="1"
      />
      <path
        d="M -50 650 C 200 620, 320 500, 420 430 C 560 330, 640 260, 780 210 C 920 160, 1000 120, 1250 40"
        stroke="#7DD3FC"
        strokeWidth="1"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
