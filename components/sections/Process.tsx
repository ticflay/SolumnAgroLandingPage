import FadeIn from '@/components/ui/FadeIn'
import { PROCESS_STEPS } from '@/lib/constants'

export default function Process() {
  return (
    <section id="processo" className="flex min-h-[calc(100svh-72px)] flex-col justify-center border-y border-line bg-sheet">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 py-20 md:py-24">
        <FadeIn>
          <div className="flex flex-col gap-2.5">
            <span className="eyebrow">02 · COMO FUNCIONA</span>
            <h2 className="section-title">Do primeiro contato à entrega com ART</h2>
          </div>
        </FadeIn>
        <ol className="m-0 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const isLast = i === PROCESS_STEPS.length - 1
            return (
              <li key={step.num}>
                <FadeIn
                  delay={0.1 + i * 0.1}
                  className={`flex flex-col gap-2.5 border-t-[3px] pt-[18px] ${
                    isLast ? 'border-marker' : 'border-ink'
                  }`}
                >
                  <span className={`font-mono text-sm ${isLast ? 'text-marker-dark' : 'text-forest'}`}>
                    ETAPA {step.num}
                  </span>
                  <span className="text-[22px] font-semibold">{step.title}</span>
                  <span className="text-[15px] leading-[1.6] text-muted">{step.desc}</span>
                  <span className="font-mono text-xs leading-[1.5] text-muted-soft">✓ {step.bullet}</span>
                </FadeIn>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
