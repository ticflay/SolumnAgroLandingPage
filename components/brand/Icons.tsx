import type { ReactNode, SVGProps } from 'react'

/** Ícones do DS Solumn: traço 1.75, cantos arredondados. */
type IconProps = Omit<SVGProps<SVGSVGElement>, 'children'> & { size?: number }

function Base({ size = 28, children, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const IconSprout = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21v-9" />
    <path d="M12 13c0-4-3-6-7-6 0 4 3 6 7 6z" />
    <path d="M12 11c0-4 3-6 7-6 0 4-3 6-7 6z" />
    <path d="M5 21h14" />
  </Base>
)

export const IconDocument = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 3h7l5 5v13H7z" />
    <path d="M14 3v5h5" />
    <path d="M10 13h6" />
    <path d="M10 17h6" />
  </Base>
)

export const IconDocumentCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 3h7l5 5v13H7z" />
    <path d="M14 3v5h5" />
    <path d="M10 15l2 2 4-4" />
  </Base>
)

export const IconClock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Base>
)

export const IconLock = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="11" width="14" height="10" rx="1" />
    <path d="M8 11V7a4 4 0 018 0v4" />
  </Base>
)

export const IconPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
)

export const IconChat = (p: IconProps) => (
  <Base {...p}>
    <path d="M21 12a8 8 0 01-11.8 7L4 20l1-4.6A8 8 0 1121 12z" />
  </Base>
)
