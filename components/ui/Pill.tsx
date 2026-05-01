import { type ReactNode } from 'react'

interface PillProps {
  children: ReactNode
}

export default function Pill({ children }: PillProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-teal-600 font-medium bg-teal-50 border border-teal-100 rounded-full px-4 py-2">
      {children}
    </div>
  )
}
