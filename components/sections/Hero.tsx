import Guarantees from '@/components/sections/Guarantees'
import { PROCESS_DELIVERABLES, WHATSAPP_URL } from '@/lib/constants'

const HERO_PHOTO =
  'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80'

const TRUST_SIGNALS = ['Retorno em até 24h', 'Sem compromisso', 'ART inclusa']

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[72px]">
      {/* Curvas de nível ao fundo */}
      <svg
        width="900"
        height="700"
        viewBox="0 0 900 700"
        className="pointer-events-none absolute -right-[200px] top-0"
        aria-hidden="true"
      >
        <g fill="none" stroke="#DDE7DF" strokeWidth="1.5">
          <path d="M120 350 C120 170 320 80 500 110 C680 140 790 290 740 450 C690 610 430 640 290 560 C190 504 120 440 120 350Z" />
          <path d="M210 350 C210 220 360 160 490 180 C620 200 690 310 650 420 C610 530 430 550 330 490 C260 450 210 410 210 350Z" />
          <path d="M300 350 C300 270 400 230 480 245 C560 260 600 330 575 395 C550 460 440 470 380 430 C330 400 300 390 300 350Z" />
          <path d="M380 350 C380 315 420 300 460 306 C500 312 515 340 505 368 C495 396 450 398 425 384 C400 370 380 370 380 350Z" />
        </g>
      </svg>

      <div className="relative mx-auto grid w-full max-w-[1200px] flex-1 content-center items-center gap-14 px-6 py-14 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="self-start rounded-sm bg-contour px-2.5 py-1.5 font-mono text-xs tracking-[0.06em] text-forest-dark">
            ART EM TODOS OS PROJETOS · ATUAÇÃO EM TODO O BRASIL
          </span>
          <h1 className="m-0 text-[clamp(40px,5.4vw,64px)] font-bold leading-[1.04] tracking-[-0.03em]">
            Consultoria ambiental com <span className="text-forest">excelência técnica</span>
          </h1>
          <p className="m-0 max-w-[520px] text-[19px] leading-[1.6] text-[#3F4D45]">
            Laudos agronômicos e projetos ambientais para empresas e produtores que precisam de
            agilidade, conformidade e segurança técnica.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contato" className="btn-primary">
              Solicitar orçamento →
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Falar no WhatsApp
            </a>
          </div>
          <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0 pt-2 font-mono text-[13px] text-muted">
            {TRUST_SIGNALS.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[400px] overflow-hidden rounded-lg bg-[#2C4A3A] md:min-h-[460px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-55 mix-blend-luminosity"
            style={{ backgroundImage: `url(${HERO_PHOTO})` }}
            role="img"
            aria-label="Área rural vista de cima"
          />
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 560 460"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0"
            aria-hidden="true"
          >
            <g fill="none" stroke="#6F9482" strokeWidth="1.5" opacity="0.7">
              <path d="M-20 400 C120 330 260 420 400 330 C480 280 540 300 580 280" />
              <path d="M-20 340 C120 270 260 360 400 270 C480 220 540 240 580 220" />
              <path d="M-20 280 C120 210 260 300 400 210 C480 160 540 180 580 160" />
              <path d="M-20 220 C120 150 260 240 400 150 C480 100 540 120 580 100" />
            </g>
          </svg>
          <div className="absolute bottom-5 left-5 right-5 flex max-w-[320px] flex-col gap-2.5 rounded bg-sheet p-5 shadow-[0_10px_30px_rgba(19,38,28,0.18)]">
            <span className="font-mono text-[11px] tracking-[0.08em] text-muted-soft">VOCÊ RECEBE</span>
            {PROCESS_DELIVERABLES.map((d) => (
              <span key={d} className="border-t border-contour pt-2 text-[15px]">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Guarantees />
    </section>
  )
}
