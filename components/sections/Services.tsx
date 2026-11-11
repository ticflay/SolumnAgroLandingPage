import FadeIn from '@/components/ui/FadeIn'
import { IconChat, IconDocument, IconSprout } from '@/components/brand/Icons'
import { SERVICES } from '@/lib/constants'

const SERVICE_ICONS = {
  projetos: IconSprout,
  laudos: IconDocument,
} as const

interface ServicesProps {
  isServicesEnabled: boolean
}

export default function Services({ isServicesEnabled }: ServicesProps) {
  return (
    <section id="servicos">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-20 md:py-24">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-5">
            <div className="flex flex-col gap-2.5">
              <span className="eyebrow">01 · SERVIÇOS</span>
              <h2 className="section-title">Nossos serviços mais procurados</h2>
            </div>
            <p className="m-0 max-w-[380px] text-base leading-[1.55] text-muted">
              Cada entrega sai com responsabilidade técnica, pronta para órgãos ambientais, bancos e
              processos judiciais.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.id as keyof typeof SERVICE_ICONS] ?? IconDocument
            const href = isServicesEnabled ? service.pageHref : '#contato'
            return (
              <FadeIn key={service.id} delay={0.1 + i * 0.1} className="h-full">
                <article className="flex h-full flex-col gap-4 rounded-lg border border-line bg-sheet p-8">
                  <div className="flex items-center justify-between gap-3">
                    <Icon size={36} className="text-forest" />
                    {service.isMostContracted ? (
                      <span className="rounded-sm bg-marker px-2 py-1 font-mono text-[11px] text-ink">
                        MAIS CONTRATADO
                      </span>
                    ) : (
                      <span className="rounded-sm border border-ink px-2 py-[3px] font-mono text-[11px]">
                        COM ART
                      </span>
                    )}
                  </div>
                  <h3 className="m-0 text-[26px] font-bold tracking-[-0.01em]">{service.title}</h3>
                  <p className="m-0 text-base leading-[1.6] text-muted">{service.desc}</p>
                  <ul className="m-0 flex list-none flex-col border-b border-contour p-0 text-[15px]">
                    {service.items.map((item) => (
                      <li key={item} className="border-t border-contour py-2.5">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={href} className="mt-auto text-[15px] font-semibold text-forest hover:text-ink">
                    {isServicesEnabled ? 'Ver detalhes →' : 'Solicitar orçamento →'}
                  </a>
                </article>
              </FadeIn>
            )
          })}

          <FadeIn delay={0.3} className="h-full">
            <article className="relative flex h-full flex-col gap-4 overflow-hidden rounded-lg bg-forest p-8 text-white">
              <svg
                width="320"
                height="240"
                viewBox="0 0 320 240"
                className="pointer-events-none absolute -bottom-10 -right-10"
                aria-hidden="true"
              >
                <g fill="none" stroke="#2F8A71" strokeWidth="1.5">
                  <path d="M20 240 C40 140 160 90 320 110" />
                  <path d="M80 240 C100 170 200 140 320 150" />
                  <path d="M140 240 C160 200 240 185 320 190" />
                </g>
              </svg>
              <IconChat size={36} className="relative" />
              <h3 className="relative m-0 text-[26px] font-bold tracking-[-0.01em]">
                Precisa de outra solução?
              </h3>
              <p className="relative m-0 text-base leading-[1.6] text-[#D7EDE3]">
                Conte sua demanda. Avaliamos o escopo e indicamos o caminho técnico mais adequado
                para o seu caso.
              </p>
              <a
                href="#contato"
                className="relative mt-auto self-start rounded bg-sheet px-5 py-[13px] text-[15px] font-semibold text-ink no-underline transition-colors duration-200 hover:bg-paper"
              >
                Falar com um especialista →
              </a>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
