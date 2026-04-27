import { Star, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import { TESTIMONIALS } from '@/lib/constants'

const STAR_KEYS = ['star-1', 'star-2', 'star-3', 'star-4', 'star-5']

export default function Testimonials() {
  return (
    <section id="depoimentos" className="min-h-screen flex flex-col justify-center py-12 md:py-20 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 w-full">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-600 mb-3">
            Depoimentos
          </p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="font-serif font-normal tracking-[-0.02em] text-green-950 mb-5 leading-[1.2] text-[clamp(1.75rem,4vw,2.375rem)]">
            O que dizem nossos clientes
          </h2>
        </FadeIn>

        {/* Avaliação agregada */}
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-8 md:mb-14">
            <div className="flex gap-1">
              {STAR_KEYS.map((key) => (
                <Star key={key} size={18} fill="#1D9E75" color="#1D9E75" />
              ))}
            </div>
            <span className="text-base font-semibold text-green-950">5/5</span>
            <span className="text-sm text-sand-500">· 100% de clientes satisfeitos</span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.author} delay={0.15 + i * 0.1}>
              <div className="bg-sand-50 rounded-2xl p-5 md:p-8 h-full flex flex-col border border-transparent transition-all duration-300 hover:border-sand-200 hover:bg-white">
                <div className="flex gap-[3px] mb-5">
                  {STAR_KEYS.map((key) => (
                    <Star key={key} size={14} fill="#1D9E75" color="#1D9E75" />
                  ))}
                </div>
                <p className="text-base text-sand-700 leading-[1.7] italic flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-sand-200 pt-4">
                  <p className="text-sm font-semibold text-green-950 mb-0.5">{t.author}</p>
                  <p className="text-sm text-sand-500">
                    {t.role} — {t.company}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA contextual */}
        <FadeIn delay={0.55}>
          <div className="mt-8 md:mt-12 rounded-2xl bg-sand-50 border border-sand-200 p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-[1.0625rem] font-semibold text-green-950 mb-1">
                Quer resultados como esses?
              </p>
              <p className="text-sm text-sand-500">
                Fale com nossa equipe e receba uma proposta personalizada em até 24h.
              </p>
            </div>
            <a
              href="#contato"
              className="shrink-0 inline-flex items-center gap-2 bg-green-900 text-white px-7 py-3.5 rounded-lg text-sm font-medium no-underline hover:bg-green-800 transition-colors duration-200"
            >
              Solicitar orçamento <ArrowRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
