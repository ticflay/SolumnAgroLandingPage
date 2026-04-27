import { ArrowRight, CheckCircle2 } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import { PROCESS_STEPS, PROCESS_DELIVERABLES } from '@/lib/constants'

export default function Process() {
  return (
    <section id="processo" className="min-h-screen flex flex-col justify-center py-12 md:py-20 bg-sand-50">
      <div className="max-w-[1120px] mx-auto px-6 w-full">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-600 mb-3">
            Como funciona
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="font-serif font-normal tracking-[-0.02em] text-green-950 mb-8 md:mb-16 leading-[1.2] text-[clamp(1.75rem,4vw,2.375rem)]">
            Do primeiro contato à<br />entrega do projeto
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <FadeIn key={step.num} delay={0.1 + i * 0.1}>
                <div className="relative">
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-[26px] left-[calc(100%-8px)] w-[calc(100%-44px)] h-px bg-sand-300 z-0" />
                  )}

                  {/* Number + dash */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="relative z-[1] w-[52px] h-[52px] rounded-full bg-green-900 text-white flex items-center justify-center font-serif text-base font-normal shrink-0">
                      {step.num}
                    </div>
                    <div className="h-0.5 w-8 rounded-sm bg-teal-500" />
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 mb-4">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-[1.0625rem] font-semibold text-green-950 mb-2">{step.title}</h3>
                  <p className="text-sm text-sand-500 leading-[1.6] mb-3">{step.desc}</p>

                  {/* Bullet */}
                  <div className="flex items-center gap-2 text-sm text-teal-600 font-medium">
                    <CheckCircle2 size={13} className="shrink-0" />
                    <span>{step.bullet}</span>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Bloco de entregáveis */}
        <FadeIn delay={0.5}>
          <div className="mt-10 md:mt-16 bg-white rounded-2xl p-5 md:p-8 border border-sand-200">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-sand-500 mb-6">
              O que você recebe
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {PROCESS_DELIVERABLES.map((d) => (
                <div key={d} className="flex items-center gap-2.5 text-sm text-sand-700">
                  <CheckCircle2 size={16} className="text-teal-500 shrink-0" />
                  {d}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Micro-CTA */}
        <FadeIn delay={0.55}>
          <div className="mt-8 text-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-3.5 rounded-lg text-sm font-medium no-underline hover:bg-teal-600 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
            >
              Iniciar meu projeto <ArrowRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
