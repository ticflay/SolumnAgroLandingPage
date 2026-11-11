import { LAUDOS_AGRONOMICOS, PROJETOS_AMBIENTAIS } from '@/lib/services-page-content'
import { WHATSAPP_URL } from '@/lib/constants'

const GROUPS = [
  { label: 'PROJETOS AMBIENTAIS', href: '#projetos-ambientais', items: PROJETOS_AMBIENTAIS },
  { label: 'LAUDOS AGRONÔMICOS', href: '#laudos-agronomicos', items: LAUDOS_AGRONOMICOS },
]

export default function ServicesPageHero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden border-b border-line pt-[72px]">
      <svg
        width="900"
        height="700"
        viewBox="0 0 900 700"
        className="pointer-events-none absolute -right-[200px] top-0"
        aria-hidden="true"
      >
        <g fill="none" stroke="#DDE7DF" strokeWidth="1.5">
          <path d="M120 350 C120 170 320 80 500 110 C680 140 790 290 740 450 C690 610 430 640 290 560 C190 504 120 440 120 350Z" />
          <path d="M210 350 C210 220 360 160 490 180 C620 200 690 310 650 420 C610 530 430 550 330 490 C260 450 210 410 210 350Z" />
          <path d="M300 350 C300 270 400 230 480 245 C560 260 600 330 575 395 C550 460 440 470 380 430 C330 400 300 390 300 350Z" />
        </g>
      </svg>

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 py-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-6">
          <span className="eyebrow">SERVIÇOS · ART INCLUSA EM TODOS</span>
          <h1 className="m-0 text-[clamp(40px,5.4vw,64px)] font-bold leading-[1.04] tracking-[-0.03em]">
            Soluções agronômicas e ambientais <span className="text-forest">completas</span>
          </h1>
          <p className="m-0 max-w-[520px] text-[19px] leading-[1.6] text-[#3F4D45]">
            Do laudo técnico à regularização ambiental, com acompanhamento do início ao fim e ART
            inclusa.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/#contato" className="btn-primary">
              Solicitar orçamento →
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <nav
          aria-label="Índice de serviços"
          className="flex flex-col gap-6 rounded-lg border border-line bg-sheet p-6 md:p-8"
        >
          {GROUPS.map((group) => (
            <div key={group.href} className="flex flex-col">
              <a
                href={group.href}
                className="mb-2 font-mono text-xs tracking-[0.08em] text-muted-soft no-underline hover:text-forest"
              >
                {group.label}
              </a>
              {group.items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-baseline gap-4 border-t border-contour py-3 text-ink no-underline"
                >
                  <span className="font-mono text-xs text-forest">{item.num}</span>
                  <span className="flex-1 text-base group-hover:text-forest">{item.title}</span>
                  <span aria-hidden="true" className="text-forest opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </section>
  )
}
