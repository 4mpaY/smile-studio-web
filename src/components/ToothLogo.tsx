const ToothLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M32 4C24 4 20 8 18 12C16 8 12 4 8 8C4 12 6 20 8 26C10 32 12 40 16 52C18 58 22 60 24 56C26 52 28 44 30 40C31 38 33 38 34 40C36 44 38 52 40 56C42 60 46 58 48 52C52 40 54 32 56 26C58 20 60 12 56 8C52 4 48 8 46 12C44 8 40 4 32 4Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M22 16C26 14 30 14 32 14C34 14 38 14 42 16"
      stroke="hsl(195, 90%, 47%)"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

export default ToothLogo;
