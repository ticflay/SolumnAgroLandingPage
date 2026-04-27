import { ChevronRight, ArrowRight, MessageCircle } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import { SERVICES, SERVICE_GUARANTEES } from '@/lib/constants'

const serviceStyles = [
  {
    colorClass: 'text-green-900',
    bgClass: 'bg-green-900/[4%]',
    chevronColor: '#122b08',
  },
  {
    colorClass: 'text-teal-600',
    bgClass: 'bg-teal-600/[4%]',
    chevronColor: '#0F6E56',
  },
] as const

export default function Services() {
  return (
    <section id="servicos" className="min-h-screen flex flex-col justify-center py-20 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 w-full">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-600 mb-3">
            Serviços
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="font-serif font-normal tracking-[-0.02em] text-green-950 mb-5 leading-[1.2] text-[clamp(1.75rem,4vw,2.375rem)]">
            Nossas principais áreas de atuação
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-base text-sand-500 max-w-[560px] mb-16 leading-[1.7]">
            Atendemos diversas demandas agronômicas e ambientais. Conheça nossas principais
            frentes — e se o que você precisa não está aqui, entre em contato que encontramos
            a solução.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const style = serviceStyles[i] ?? serviceStyles[0]
            const Icon = service.icon

            return (
              <FadeIn key={service.id} delay={0.15 + i * 0.1}>
                <a href="#contato" className="no-underline text-inherit block h-full">
                  <div className="relative overflow-hidden rounded-2xl p-10 h-full flex flex-col bg-sand-50 border border-transparent cursor-pointer transition-all duration-300 hover:bg-white hover:border-sand-200 hover:-translate-y-[3px] hover:shadow-[0_12px_48px_rgba(0,0,0,0.05)]">
                    <div className={`absolute -top-[60px] -right-[60px] w-40 h-40 rounded-full pointer-events-none ${style.bgClass}`} />

                    <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${style.bgClass} ${style.colorClass}`}>
                      <Icon size={24} />
                    </div>

                    <h3 className="relative font-serif text-[1.375rem] font-normal text-green-950 mb-3">
                      {service.title}
                    </h3>
                    <p className="relative text-base text-sand-500 leading-[1.7] mb-6">
                      {service.desc}
                    </p>

                    <div className="relative flex flex-col gap-3">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-sm text-sand-700">
                          <ChevronRight
                            size={14}
                            style={{ color: style.chevronColor, flexShrink: 0 }}
                          />
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className={`relative inline-flex items-center gap-1.5 text-sm font-medium mt-auto pt-6 ${style.colorClass}`}>
                      Solicitar orçamento <ArrowRight size={14} />
                    </div>
                  </div>
                </a>
              </FadeIn>
            )
          })}

          <FadeIn delay={0.35}>
            <a href="#contato" className="no-underline text-inherit block h-full">
              <div className="rounded-2xl p-10 h-full min-h-[280px] bg-sand-50 border border-dashed border-sand-300 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-white hover:border-teal-500 hover:-translate-y-[3px] hover:shadow-[0_12px_48px_rgba(0,0,0,0.05)]">
                <div className="w-12 h-12 rounded-xl bg-teal-600/[6%] flex items-center justify-center text-teal-600 mb-5">
                  <MessageCircle size={24} />
                </div>
                <h3 className="font-serif text-[1.375rem] font-normal text-green-950 mb-2.5">
                  Precisa de outro serviço?
                </h3>
                <p className="text-base text-sand-500 leading-[1.7] mb-5 max-w-[300px]">
                  Atendemos diversas demandas agronômicas e ambientais. Fale conosco e entenda
                  como podemos ajudar.
                </p>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600">
                  Entrar em contato <ArrowRight size={14} />
                </div>
              </div>
            </a>
          </FadeIn>
        </div>

        {/* Garantias */}
        <FadeIn delay={0.45}>
          <div className="mt-12 pt-10 border-t border-sand-200 flex flex-wrap justify-center gap-8 md:gap-14">
            {SERVICE_GUARANTEES.map((g) => {
              const Icon = g.icon
              return (
                <div key={g.text} className="flex items-center gap-2.5 text-sm text-sand-700">
                  <Icon size={15} className="text-teal-600 shrink-0" />
                  {g.text}
                </div>
              )
            })}
          </div>
        </FadeIn>

        {/* Micro-CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-10 text-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-green-900 text-white px-8 py-3.5 rounded-lg text-sm font-medium no-underline hover:bg-green-800 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
            >
              Solicitar orçamento <ArrowRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
