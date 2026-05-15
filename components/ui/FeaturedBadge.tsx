interface FeaturedBadgeProps {
  label: string
}

export default function FeaturedBadge({ label }: FeaturedBadgeProps) {
  return (
    <div className="absolute top-4 right-4 flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#C9A840] text-white shadow-sm">
      {label}
    </div>
  )
}
