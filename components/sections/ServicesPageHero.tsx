import { ArrowRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'

export default function ServicesPageHero() {
  return (
    <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-950 pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-400 mb-4">
            Serviços
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="font-serif font-normal text-white tracking-[-0.02em] leading-[1.15] mb-6 text-[clamp(2rem,5vw,3.5rem)] max-w-[700px]">
            Soluções agronômicas e ambientais completas
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-white/60 text-lg leading-[1.7] max-w-[520px] mb-12">
            Do laudo técnico à regularização ambiental — acompanhamento do início ao fim, com ART inclusa.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projetos-ambientais"
              className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/20 px-5 py-2.5 rounded-full no-underline hover:bg-white/10 transition-colors duration-200"
            >
              Projetos ambientais <ArrowRight size={14} />
            </a>
            <a
              href="#laudos-agronomicos"
              className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/20 px-5 py-2.5 rounded-full no-underline hover:bg-white/10 transition-colors duration-200"
            >
              Laudos agronômicos <ArrowRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
