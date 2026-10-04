type PathTrailProps = {
  className?: string;
};

/**
 * Decorative navigation vector: a thin straight line from southwest to northeast.
 * Operational gray at low opacity on flat navy. No glow and no extra palette colors.
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
      <line
        x1="80"
        y1="620"
        x2="1120"
        y2="80"
        stroke="#8A94A6"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
    </svg>
  );
}
