import { IconClock, IconDocumentCheck, IconLock, IconPin } from '@/components/brand/Icons'

const GUARANTEES = [
  { Icon: IconDocumentCheck, text: 'ART inclusa em todo projeto' },
  { Icon: IconClock, text: 'Prazos cumpridos' },
  { Icon: IconLock, text: 'Sigilo das informações' },
  { Icon: IconPin, text: 'Atendimento em todo o Brasil' },
]

export default function Guarantees() {
  return (
    <section aria-label="Garantias" className="bg-ink text-paper">
      <ul className="m-0 mx-auto grid max-w-[1200px] list-none grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {GUARANTEES.map(({ Icon, text }) => (
          <li key={text} className="flex items-center gap-3.5">
            <Icon className="shrink-0 text-varzea" />
            <span className="text-base">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
