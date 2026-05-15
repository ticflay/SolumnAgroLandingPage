import { ChevronRight, ArrowRight, MessageCircle } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import FeaturedBadge from '@/components/ui/FeaturedBadge'
import Pill from '@/components/ui/Pill'
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

interface ServicesProps {
  isServicesEnabled: boolean
}

export default function Services({ isServicesEnabled }: ServicesProps) {
  return (
    <section id="servicos" className="min-h-screen flex flex-col justify-center pt-12 md:pt-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-600 mb-3">
            Serviços em destaque
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="font-serif font-normal tracking-[-0.02em] text-green-950 mb-5 leading-[1.2] text-[clamp(1.75rem,4vw,2.375rem)]">
            Nossos serviços mais procurados
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-base text-sand-500 max-w-[560px] mb-8 md:mb-16 leading-[1.7]">
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
                <a href={isServicesEnabled ? service.pageHref : '#contato'} className="no-underline text-inherit block h-full">
                  <div className="relative overflow-hidden rounded-2xl p-6 md:p-10 h-full flex flex-col bg-sand-50 border border-[#C9A840]/20 cursor-pointer transition-all duration-300 hover:bg-white hover:border-[#C9A840]/50 hover:-translate-y-[3px] hover:shadow-[0_12px_48px_rgba(201,168,64,0.12)]">
                    <div className="absolute top-0 left-0 right-0 h-[4px] rounded-t-2xl bg-gradient-to-r from-[#B8860B] via-[#E8C86A] to-[#B8860B]" />
                    {service.isMostContracted && <FeaturedBadge label="★ Mais contratado" />}
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
                      {isServicesEnabled ? 'Ver detalhes' : 'Solicitar orçamento'} <ArrowRight size={14} />
                    </div>
                  </div>
                </a>
              </FadeIn>
            )
          })}

          <FadeIn delay={0.35}>
            <a href="#contato" className="no-underline text-inherit block h-full">
              <div className="rounded-2xl p-6 md:p-10 h-full min-h-[280px] bg-sand-50 border border-dashed border-sand-300 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:bg-white hover:border-teal-500 hover:-translate-y-[3px] hover:shadow-[0_12px_48px_rgba(0,0,0,0.05)]">
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
          <div className="mt-12 border border-sand-200 rounded-2xl px-6 md:px-12 py-6 flex flex-wrap justify-center gap-3 md:gap-4">
            {SERVICE_GUARANTEES.map((g) => {
              const Icon = g.icon
              return (
                <Pill key={g.text}>
                  <Icon size={14} className="shrink-0" />
                  {g.text}
                </Pill>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
