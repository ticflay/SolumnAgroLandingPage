import { MessageCircle, Mail } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import { WHATSAPP_URL } from '@/lib/constants'

export default function ServicesPageCTA() {
  return (
    <section id="outros-servicos" className="bg-white border-t-[3px] border-t-green-900 py-20 md:py-28 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <FadeIn>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-600 mb-3">
                Outros serviços
              </p>
              <h2 className="font-serif font-normal text-green-950 tracking-[-0.02em] leading-[1.2] text-[clamp(1.75rem,4vw,2.5rem)] mb-5">
                Não encontrou o que procurava?
              </h2>
              <p className="text-sand-500 text-base leading-[1.8] max-w-[480px]">
                Cada propriedade tem suas particularidades. Se a sua demanda exige uma abordagem diferente ou você ainda não sabe por onde começar, entre em contato — avaliamos o caso e indicamos a solução técnica mais adequada.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-teal-600 text-white px-6 py-3.5 rounded-lg text-sm font-medium no-underline hover:bg-teal-500 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <MessageCircle size={16} />
                Falar pelo WhatsApp
              </a>
              <a
                href="mailto:consultoriasolum@gmail.com"
                className="inline-flex items-center gap-2.5 border border-sand-200 text-sand-700 px-6 py-3.5 rounded-lg text-sm font-medium no-underline hover:border-sand-300 hover:text-green-950 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={16} />
                Enviar e-mail
              </a>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
