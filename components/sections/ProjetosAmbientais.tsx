import { CheckCircle2, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import Pill from '@/components/ui/Pill'
import { PROJETOS_AMBIENTAIS } from '@/lib/services-page-content'

const sectionBgs = ['bg-white', 'bg-sand-100'] as const

export default function ProjetosAmbientais() {
  return (
    <section id="projetos-ambientais">

      {/* Cabeçalho da seção */}
      <div className="bg-white border-t-[3px] border-t-green-900 border-b border-b-sand-200 py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-600 mb-3">
              Projetos Ambientais
            </p>
            <h2 className="font-serif font-normal text-green-950 tracking-[-0.02em] leading-[1.2] text-[clamp(1.75rem,4vw,2.5rem)]">
              Regularização e gestão ambiental completa
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="text-sand-500 text-base leading-[1.7] max-w-[520px] mt-4">
              Do cadastro obrigatório à recuperação de áreas degradadas — conduzimos cada etapa com rigor técnico e acompanhamento até a aprovação final.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Sub-serviços */}
      {PROJETOS_AMBIENTAIS.map((projeto, i) => (
        <div
          key={projeto.id}
          id={projeto.id}
          className={`${sectionBgs[i % 2]} py-20 md:py-28 ${i > 0 ? 'border-t-2 border-sand-200' : ''}`}
        >
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

              {/* Coluna esquerda: descrição + para quem */}
              <FadeIn>
                <div>
                  <span className="font-serif text-[5rem] leading-none select-none text-teal-600/20">
                    {projeto.num}
                  </span>
                  <h3 className="font-serif font-normal text-green-950 tracking-[-0.02em] leading-[1.2] mt-2 mb-5 text-[clamp(1.5rem,3vw,2rem)]">
                    {projeto.title}
                  </h3>
                  <p className="text-base text-sand-500 leading-[1.8] mb-8">
                    {projeto.description}
                  </p>

                  <div className="border-t border-sand-200 pt-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-sand-400 mb-4">
                      Para quem é indicado
                    </p>
                    <ul className="flex flex-col gap-3">
                      {projeto.forWhom.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-sand-700">
                          <CheckCircle2 size={15} className="text-teal-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* Coluna direita: etapas + entregáveis + CTA */}
              <FadeIn delay={0.1}>
                <div className="flex flex-col gap-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-sand-400 mb-5">
                      Etapas do processo
                    </p>
                    <ol className="flex flex-col gap-4">
                      {projeto.steps.map((step, idx) => (
                        <li key={step} className="flex items-start gap-4">
                          <span className="font-serif text-sm text-teal-600 font-medium w-6 shrink-0 pt-0.5">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-sm text-sand-700 leading-[1.6]">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-sand-400 mb-4">
                      O que você recebe
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {projeto.deliverables.map((d) => (
                        <Pill key={d}>{d}</Pill>
                      ))}
                    </div>
                  </div>

                  <a
                    href="/#contato"
                    className="self-start inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg text-sm font-medium no-underline hover:bg-teal-500 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  >
                    Solicitar orçamento <ArrowRight size={14} />
                  </a>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
