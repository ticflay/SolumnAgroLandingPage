interface LogoMarkProps {
  size?: number
  /** Id único para o clipPath (precisa ser diferente em cada instância da página). */
  clipId: string
  className?: string
}

/** Símbolo Solumn: broto sobre camadas de solo (DS 1.0 · Broto & Terra). */
export function LogoMark({ size = 40, clipId, className }: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <clipPath id={clipId}>
        <circle cx="50" cy="50" r="48" />
      </clipPath>
      <circle cx="50" cy="50" r="48" fill="#13261C" />
      <g clipPath={`url(#${clipId})`}>
        <path d="M-5 70 C20 58 45 62 105 52 L105 105 L-5 105Z" fill="#0F6E56" />
        <path d="M-5 82 C30 72 60 80 105 70 L105 105 L-5 105Z" fill="#6DBF9C" />
      </g>
      <path d="M50 64 L50 40" stroke="#F4F2EA" strokeWidth="5" strokeLinecap="round" />
      <path d="M50 46 C50 32 40 24 26 24 C26 38 36 46 50 46Z" fill="#F4F2EA" />
      <path d="M50 40 C50 26 60 18 74 18 C74 32 64 40 50 40Z" fill="#2AB889" />
    </svg>
  )
}

interface LogoProps {
  clipId: string
  withTagline?: boolean
}

export default function Logo({ clipId, withTagline = true }: LogoProps) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark clipId={clipId} size={40} />
      <span className="flex flex-col leading-none">
        <span className="font-brand text-2xl font-semibold text-ink">Solumn</span>
        {withTagline && (
          <span className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-forest">
            SOLUÇÕES AMBIENTAIS
          </span>
        )}
      </span>
    </span>
  )
}
