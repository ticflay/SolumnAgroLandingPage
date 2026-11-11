import FadeIn from '@/components/ui/FadeIn'
import type { ProjetoAmbiental } from '@/lib/services-page-content'
import { servicePageHref } from '@/lib/service-pages'

interface ServiceCategoryProps {
  id: string
  index: string
  label: string
  title: string
  description: string
  items: ProjetoAmbiental[]
}

/** Uma categoria: capa escura com índice + uma seção (altura da tela) por serviço. */
export default function ServiceCategory({ id, index, label, title, description, items }: ServiceCategoryProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      {/* Capa da categoria */}
      <div className="relative flex min-h-[calc(100svh-72px)] flex-col justify-center overflow-hidden bg-ink text-paper">
        <svg
          width="700"
          height="500"
          viewBox="0 0 700 500"
          className="pointer-events-none absolute -bottom-[120px] -right-[120px]"
          aria-hidden="true"
        >
          <g fill="none" stroke="#24402F" strokeWidth="1.5">
            <path d="M0 420 C160 320 340 440 520 320 C600 270 660 290 700 270" />
            <path d="M0 340 C160 240 340 360 520 240 C600 190 660 210 700 190" />
            <path d="M0 260 C160 160 340 280 520 160 C600 110 660 130 700 110" />
          </g>
        </svg>
        <div className="relative mx-auto grid w-full max-w-[1200px] gap-12 px-6 py-20 lg:grid-cols-2 lg:items-end">
          <FadeIn className="flex flex-col gap-6">
            <span className="font-mono text-[13px] text-varzea">
              {index} · {label}
            </span>
            <h2
              id={`${id}-title`}
              className="m-0 text-[clamp(36px,4.8vw,56px)] font-bold leading-[1.05] tracking-[-0.03em]"
            >
              {title}
            </h2>
            <p className="m-0 max-w-[480px] text-lg leading-[1.6] text-[#C9D3CC]">{description}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ol className="m-0 flex list-none flex-col border-t border-[#36523F] p-0">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-baseline gap-4 border-b border-[#36523F] py-4 text-paper no-underline"
                  >
                    <span className="font-mono text-xs text-[#A9B5AD]">{item.num}</span>
                    <span className="flex-1 text-[17px] group-hover:text-varzea">{item.title}</span>
                    <span aria-hidden="true" className="text-varzea">
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </div>

      {/* Um bloco por serviço */}
      {items.map((item, i) => (
        <article
          key={item.id}
          id={item.id}
          aria-labelledby={`${item.id}-title`}
          className={`flex min-h-[calc(100svh-72px)] flex-col justify-center border-b border-line ${
            i % 2 === 0 ? 'bg-paper' : 'bg-sheet'
          }`}
        >
          <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4 border-b border-ink pb-4">
                <span className="eyebrow">
                  {label} · {item.num}/{String(items.length).padStart(2, '0')}
                </span>
                <span className="rounded-sm bg-contour px-2 py-1 font-mono text-[11px] text-forest-dark">
                  ART INCLUSA
                </span>
              </div>
              <h3
                id={`${item.id}-title`}
                className="m-0 text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.1] tracking-[-0.02em]"
              >
                {item.title}
              </h3>
              <p className="m-0 text-base leading-[1.7] text-muted">{item.description}</p>
              <a href={servicePageHref(item.id)} className="self-start font-mono text-sm text-forest">
                Perguntas frequentes e detalhes →
              </a>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs tracking-[0.08em] text-muted-soft">PARA QUEM É INDICADO</span>
                <ul className="m-0 flex list-none flex-col border-b border-contour p-0 text-[15px]">
                  {item.forWhom.map((who) => (
                    <li key={who} className="border-t border-contour py-2.5">
                      {who}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-8 rounded-lg border border-line bg-sheet p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-xs tracking-[0.08em] text-muted-soft">ETAPAS DO PROCESSO</span>
                  <ol className="m-0 flex list-none flex-col p-0">
                    {item.steps.map((step, idx) => {
                      const isLast = idx === item.steps.length - 1
                      return (
                        <li
                          key={step}
                          className={`flex items-baseline gap-4 border-t-2 py-3 ${isLast ? 'border-marker' : 'border-ink'}`}
                        >
                          <span className={`font-mono text-xs ${isLast ? 'text-marker-dark' : 'text-forest'}`}>
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-[15px] leading-[1.5]">{step}</span>
                        </li>
                      )
                    })}
                  </ol>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-xs tracking-[0.08em] text-muted-soft">VOCÊ RECEBE</span>
                  <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                    {item.deliverables.map((d) => (
                      <li key={d} className="rounded-sm border border-ink px-2 py-[3px] font-mono text-xs">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="/#contato" className="btn-primary self-start">
                  Solicitar orçamento →
                </a>
              </div>
            </FadeIn>
          </div>
        </article>
      ))}
    </section>
  )
}
