import FadeIn from '@/components/ui/FadeIn'
import { IconChat } from '@/components/brand/Icons'
import { CONTACT_INFO, WHATSAPP_URL } from '@/lib/constants'

export default function ServicesPageCTA() {
  return (
    <section
      id="outros-servicos"
      className="flex min-h-[calc(100svh-72px)] flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20">
        <FadeIn>
          <div className="relative grid gap-10 overflow-hidden rounded-lg bg-forest p-8 text-white md:p-14 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <svg
              width="420"
              height="300"
              viewBox="0 0 320 240"
              className="pointer-events-none absolute -bottom-12 -right-12"
              aria-hidden="true"
            >
              <g fill="none" stroke="#2F8A71" strokeWidth="1.5">
                <path d="M20 240 C40 140 160 90 320 110" />
                <path d="M80 240 C100 170 200 140 320 150" />
                <path d="M140 240 C160 200 240 185 320 190" />
              </g>
            </svg>
            <div className="relative flex flex-col gap-5">
              <IconChat size={40} />
              <span className="font-mono text-[13px] text-[#CDE6DA]">03 · OUTROS SERVIÇOS</span>
              <h2 className="m-0 text-[clamp(32px,4vw,48px)] font-bold leading-[1.08] tracking-[-0.02em]">
                Não encontrou o que procurava?
              </h2>
              <p className="m-0 max-w-[520px] text-lg leading-[1.6] text-[#D7EDE3]">
                Cada propriedade tem suas particularidades. Se a sua demanda exige outra abordagem ou
                você ainda não sabe por onde começar, avaliamos o caso e indicamos a solução técnica
                mais adequada.
              </p>
            </div>
            <div className="relative flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-sheet px-6 py-[15px] text-center text-base font-semibold text-ink no-underline transition-colors duration-200 hover:bg-paper"
              >
                Falar no WhatsApp →
              </a>
              <a
                href={CONTACT_INFO[1].href}
                className="rounded border border-white px-6 py-[14px] text-center text-base font-medium text-white no-underline transition-colors duration-200 hover:bg-white/10"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
