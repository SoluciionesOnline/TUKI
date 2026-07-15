// Logotipo oficial TUKI: la "U que vuelve" + punto de impacto
export default function TukiLogo({ h = 40, color = "#3b1391" }) {
  return (
    <svg viewBox="-12 -16 444 142" height={h} role="img" aria-label="TUKI" style={{ display: "block" }}>
      <g stroke={color} strokeWidth="24" strokeLinecap="round" fill="none">
        <path d="M 0 12 H 80" />
        <path d="M 40 12 V 110" />
        <path d="M 116 12 V 66 A 40 40 0 0 0 196 66 V 34" />
        <path d="M 252 12 V 110" />
        <path d="M 252 66 L 312 14" />
        <path d="M 252 66 L 312 108" />
        <path d="M 352 12 V 110" />
      </g>
      <polygon points="196,0 174,28 218,28" fill="#ffd60a" />
      <circle cx="404" cy="98" r="16" fill="#ffd60a" />
    </svg>
  );
}
